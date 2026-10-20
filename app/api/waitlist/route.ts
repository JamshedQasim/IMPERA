import { NextResponse } from 'next/server'
import { ensureDatabaseIndexes, getDatabase } from '@/lib/mongodb'
import { emailField, readJsonObject, textField, ValidationError } from '@/lib/validation'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const body = await readJsonObject(request)
    const entry = {
      name: textField(body.name, 'Name', { required: true, maxLength: 100 }),
      email: emailField(body.email),
      company: textField(body.company, 'Company', { maxLength: 160 }),
      mobile: textField(body.mobile, 'Mobile', { maxLength: 40 }),
    }

    await ensureDatabaseIndexes()
    const database = await getDatabase()
    const now = new Date()
    const result = await database.collection('waitlist').updateOne(
      { email: entry.email },
      {
        $set: { ...entry, updatedAt: now },
        $setOnInsert: { createdAt: now, source: 'website' },
      },
      { upsert: true },
    )

    return NextResponse.json({
      ok: true,
      alreadyJoined: result.upsertedCount === 0,
      message: result.upsertedCount === 0 ? 'You are already on the waitlist.' : 'You have joined the waitlist.',
    })
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
    }
    console.error('Waitlist submission failed:', error)
    return NextResponse.json({ ok: false, error: 'Unable to save your waitlist request right now.' }, { status: 500 })
  }
}

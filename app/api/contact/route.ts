import { NextResponse } from 'next/server'
import { ensureDatabaseIndexes, getDatabase } from '@/lib/mongodb'
import { emailField, readJsonObject, textField, ValidationError } from '@/lib/validation'

export const runtime = 'nodejs'

const services = new Set([
  'Impera Slot',
  'Impera Build',
  'Impera Core',
  'Impera Launch',
  'Impera Pay',
  'Impera Reach',
  'Impera Sight',
  'Impera Talk',
  'Impera Connect',
  'Impera Flow',
])

export async function POST(request: Request) {
  try {
    const body = await readJsonObject(request)
    const service = textField(body.service, 'Impera Service', { maxLength: 80 })
    if (service && !services.has(service)) throw new ValidationError('Select a valid Impera service.')

    const message = {
      name: textField(body.name, 'Name', { required: true, maxLength: 100 }),
      email: emailField(body.email),
      phone: textField(body.phone, 'Contact Number', { maxLength: 40 }),
      service,
      message: textField(body.message, 'Message', { required: true, maxLength: 3000 }),
      status: 'new' as const,
      source: 'website',
      createdAt: new Date(),
    }

    await ensureDatabaseIndexes()
    const database = await getDatabase()
    await database.collection('contacts').insertOne(message)

    return NextResponse.json({ ok: true, message: 'Your message has been received.' }, { status: 201 })
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
    }
    console.error('Contact submission failed:', error)
    return NextResponse.json({ ok: false, error: 'Unable to send your message right now.' }, { status: 500 })
  }
}

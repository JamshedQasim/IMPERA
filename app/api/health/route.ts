import { NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const database = await getDatabase()
    await database.command({ ping: 1 })
    return NextResponse.json({ ok: true, database: 'connected' })
  } catch {
    return NextResponse.json({ ok: false, database: 'unavailable' }, { status: 503 })
  }
}

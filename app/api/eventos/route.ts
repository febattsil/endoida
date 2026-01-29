import { NextResponse } from 'next/server'
import { connectMongo } from '@/lib/mongodb'
import Event from '@/models/Event'

export async function GET() {
  try {
    await connectMongo()

    const events = await Event.find()
      .populate('players')
      .sort({ createdAt: -1 })

    return NextResponse.json(events)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erro ao buscar eventos' },
      { status: 500 }
    )
  }
}

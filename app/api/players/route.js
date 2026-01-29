import { NextResponse } from 'next/server'
import { connectMongo } from '@/lib/mongodb'
import Player from '@/models/Player'

export async function GET() {
  try {
    await connectMongo()

    const players = await Player.find()
      .populate('events.event')
      .sort({ createdAt: -1 })

    return NextResponse.json(players)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erro ao buscar players' },
      { status: 500 }
    )
  }
}

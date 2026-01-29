import mongoose from 'mongoose'
import Event from '@/models/Event'
import Player from '@/models/Player'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const MONGODB_URI = process.env.MONGODB_URI!

const calcRating = (votersCount: number) => {
  return Math.min(5, votersCount)
}

async function seed() {
  try {
    console.log('🌱 Conectando ao MongoDB...')
    await mongoose.connect(MONGODB_URI)

    console.log('🧹 Limpando coleções...')
    await Event.deleteMany({})
    await Player.deleteMany({})

    console.log('🎉 Criando eventos...')
    const events = await Event.insertMany([
      {
        name: 'Noite Neon',
        description: 'Festa eletrônica futurista',
        locationlap: 'São Paulo',
      },
      {
        name: 'Cosmic Party',
        description: 'Viagem sonora intergaláctica',
        locationlap: 'Rio de Janeiro',
      }
    ])

    console.log('🧑‍🚀 Criando players base...')
    const basePlayers = await Player.insertMany([
      {
        username: 'neonfox',
        name: 'Lucas Neon',
        email: 'lucas@neon.com',
        password: '123456',
        age: 25,
        emoji: '🦊',
      },
      {
        username: 'cosmicgirl',
        name: 'Ana Cosmic',
        email: 'ana@cosmic.com',
        password: '123456',
        age: 28,
        emoji: '🌌',
      },
      {
        username: 'voter1',
        name: 'Voter One',
        email: 'v1@test.com',
        password: '123456',
      },
      {
        username: 'voter2',
        name: 'Voter Two',
        email: 'v2@test.com',
        password: '123456',
      },
      {
        username: 'voter3',
        name: 'Voter Three',
        email: 'v3@test.com',
        password: '123456',
      },
    ])

    const [
      neonfox,
      cosmicgirl,
      voter1,
      voter2,
      voter3
    ] = basePlayers

    console.log('⭐ Atualizando ratings...')
    await Player.updateOne(
      { _id: neonfox._id },
      {
        $set: {
          ratings: [
            {
              character: 'Boto',
              voters: [voter1._id, voter2._id, voter3._id],
              rating: calcRating(3)
            },
            {
              character: 'Boitatá',
              voters: [voter1._id, voter2._id],
              rating: calcRating(2)
            }
          ]
        },
        events: [
          {
            event: events[0]._id,
            status: 'comming'
          }
        ]
      }
    )

    await Player.updateOne(
      { _id: cosmicgirl._id },
      {
        $set: {
          ratings: [
            {
              character: 'Caipora',
              voters: [voter2._id, voter3._id],
              rating: calcRating(2)
            }
          ]
        },
        events: [
          {
            event: events[1]._id,
            status: 'interested'
          }
        ]
      }
    )

    console.log('✅ Seed finalizado com sucesso!')
    process.exit(0)
  } catch (err) {
    console.error('❌ Erro no seed:', err)
    process.exit(1)
  }
}

seed()

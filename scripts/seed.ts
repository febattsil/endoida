import mongoose from 'mongoose'
import Event from '@/models/Event'
import Player from '@/models/Player'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.local',
})


const MONGODB_URI = process.env.MONGODB_URI!

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
        medias: {
          icon: '/icons/neon.png',
          album: '/albums/neon'
        },
        dj: 'DJ Pulse',
        performer: 'Laser Crew',
        dragPerformer: 'Electra',
        sponsors: {
          poster: '/sponsors/redbull.png'
        },
        drinks: 'Vodka, Gin',
        foods: 'Pizza, Burgers'
      },
      {
        name: 'Cosmic Party',
        description: 'Viagem sonora intergaláctica',
        locationlap: 'Rio de Janeiro',
        medias: {
          icon: '/icons/cosmic.png',
          album: '/albums/cosmic'
        },
        dj: 'DJ Galaxy',
        performer: 'Star Dancers',
        dragPerformer: 'Nova Queen',
        sponsors: {
          poster: '/sponsors/heineken.png'
        },
        drinks: 'Whisky, Drinks cósmicos',
        foods: 'Finger foods'
      }
    ])

    console.log('🧑‍🚀 Criando players...')
    const players = await Player.insertMany([
      {
        username: 'neonfox',
        name: 'Lucas Neon',
        email: 'lucas@neon.com',
        password: '123456',
        age: 25,
        character: 'Energetic',
        bio: 'Amo festas e música eletrônica',
        medias: {
          profile: '/profiles/neonfox.png',
          fotos: []
        },
        emoji: '🦊',
        zodiacsign: 'Aquário',
        interesting: 7,
        partylevel: 9,
        missingparties: 1,
        former: false,
        generation: 'Z',
        favmusicgenre: 'EDM',
        favdrink: 'Gin',
        socialratings: 8,
        events: [
          {
            event: events[0]._id,
            status: 'comming'
          }
        ]
      },
      {
        username: 'cosmicgirl',
        name: 'Ana Cosmic',
        email: 'ana@cosmic.com',
        password: '123456',
        age: 28,
        character: 'Chill',
        bio: 'Viagens, música e boas vibes',
        medias: {
          profile: '/profiles/cosmicgirl.png',
          fotos: []
        },
        emoji: '🌌',
        zodiacsign: 'Peixes',
        interesting: 8,
        partylevel: 6,
        missingparties: 0,
        former: false,
        generation: 'Millennial',
        favmusicgenre: 'House',
        favdrink: 'Caipirinha',
        socialratings: 9,
        events: [
          {
            event: events[1]._id,
            status: 'interested'
          }
        ]
      }
    ])

    console.log('✅ Seed finalizado com sucesso!')
    console.log({
      events: events.length,
      players: players.length
    })

    process.exit(0)
  } catch (err) {
    console.error('❌ Erro no seed:', err)
    process.exit(1)
  }
}

seed()

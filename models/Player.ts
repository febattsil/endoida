import mongoose, { Schema, Types } from 'mongoose';

const PlayerEventsSchema = new Schema({
  event: {
    type: Types.ObjectId,
    ref: "Event",
  },
  status: {
    type: String,
    enum: ["notconfirmed", "comming", "interested"],
    default: "notconfirmed"
  },
})

const PlayerRatingsSchema = new Schema({
  character: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  voters: [{
    type: Types.ObjectId,
    ref: "Player"
  }]
})

const PlayerSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  age: Number,
  maincharacter: String,
  bio: String,
  medias: {
    profile: String,
    fotos: [String]
  },
  personality: String,
  emoji: String,
  zodiacsign: String,
  interesting: Number,
  partylevel: Number,
  missingparties: Number,
  former: Boolean,
  generation: String,
  favmusicgenre: String,
  favdrink: String,
  socialratings: Number,
  events: [PlayerEventsSchema],
  ratings: [PlayerRatingsSchema]
}, {
  timestamps: true
})

export default mongoose.models.Player || mongoose.model("Player", PlayerSchema)

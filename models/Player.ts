import mongoose, { Schema, Types } from 'mongoose';

const PlayerEventsSchema = new Schema({
    event: {
        type: Types.ObjectId,
        ref: "Event",
        required: false,
    },
    status: {
        type: String,
        enum: ["notconfirmed", "comming", "interested"],
        default: "notconfirmed"
    },
})

const PlayerSchema = new Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    age: Number,
    character: String,
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
}, {
    timestamps: true
})

export default mongoose.models.Player || mongoose.model("Player", PlayerSchema)
import mongoose, { Schema, Types } from 'mongoose';

const EventSchema = new Schema({
    name: String,
    description: String,
    locationlap: String,
    medias: {
        icon: String,
        album: String,
    },
    dj: String,
    performer: String,
    dragPerformer: String,
    sponsors: {
        poster: String,

    },
    drinks: String,
    foods: String,
    players: {
        type: Types.ObjectId,
        ref: "Player",
        required: false,
    },
}, {
    timestamps: true
})

export default mongoose.models.Event || mongoose.model("Event", EventSchema)
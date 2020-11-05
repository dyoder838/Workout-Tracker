// base routine schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: "Enter a name for your Workout"
    },
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Exercise"
        }
    ]

})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// base routine schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoutineSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: "Enter a name for your routine"
    },
    date: {
        type: Date,
        default: Date.now
    },
    workouts: [
        {
            type: Schema.Types.ObjectId, 
            ref: "workoutroutine"
        }
    ]

})

const Routine = mongoose.model("routine", RoutineSchema);

module.exports = Routine;

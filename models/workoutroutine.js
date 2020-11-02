// routine within a workout
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // name data points for the workout
    exercise: String,
    time: String,
    notes: String,
    facepalms: String,
    googlesearches: String

});

const Workoutroutine = mongoose.model("workoutroutine", WorkoutSchema);

module.exports = Workoutroutine;
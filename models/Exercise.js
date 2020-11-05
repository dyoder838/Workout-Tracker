// routine within a workout
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
   
    name:{
        type: String,
        trim: true,
        required: "You must name your exercise!!!"
    },
    time:{
        type: Number,
        required: "How long are you going to do this exercise?"
    }, 
    notes:{
        type: String
    },
    facepalms:{
        type: Number,
        required: "How many times did you facepalm?"
    },
    googlesearches:{
        type: Number,
        required: "How google searches did you have to preform?"
    } 
    

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
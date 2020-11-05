// api routes
const express = require("express")
const router = express.Router();
const db = require("../models/index.js");

router.get("/", (req, res) => {
    db.Workout.find({}).populate("exercises")
        .then(workout => {
            res.render("index", { workouts: workout })
        }).catch(err => { res.json(err) })
});

router.post("/api/", (req, res) => {
    db.Workout.create({
        name: req.body.workoutNameIn
    })
})
module.exports = router;
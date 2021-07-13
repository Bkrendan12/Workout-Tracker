const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.post("/", async (req, res) => {
  let result = await Workout.create(req.body);
  console.log(result);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  let workout = await Workout.findOne({
    _id: req.params.id,
  });
  workout.exercises.push(req.body);
  let result = await workout.save();
  console.log(result);
  res.send(result);
});

router.get("/", async (req, res) => {
  let result = await Workout.find({});
  console.log(result);
  res.send(result);
});

router.get("/range", async (req, res) => {
  let result = await Workout.find({}).sort({ day: -1 }).limit(7);
  console.log(result);
  res.send(result);
});

module.exports = router;

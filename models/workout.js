const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          required: true,
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        distance: {
          type: Number,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((acc, excercise) => {
    return acc + excercise.duration;
  }, 0);
});

const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;

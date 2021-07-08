const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workouttrackerdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

app.use("/api/workouts", apiRoutes);
require("./routes/html.js")(app);

app.listen(PORT, () => {
  console.log(`connected on port ${PORT}`);
});

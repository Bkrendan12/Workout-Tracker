# Workout Tracker

For this assignment, you'll create a workout tracker. You have already been provided with the front end code in the `Develop` folder. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## User Story

- As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

- Add exercises to the most recent workout plan.

- Add new exercises to a new workout plan.

- View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

- View the total duration of each workout from the past seven workouts on the `stats` page.

> **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

- [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

- [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)

## Submission on BCS

You are required to submit the following:

- The URL to the deployed application

- The URL to the GitHub repository

# Team-Profile-Generator

## Workout Tracker

Workout Tracker

## Link to project repository:

[Github-Repo](https://github.com/Bkrendan12/Workout-Tracker)

## Link to Project Video Walk-through

[Link-Application-video-walkthrough](https://youtu.be/vRJiZS6c0AM)

## Screenshots for Application

![Untitled_ Jun 30, 2021 2_49 PM](https://user-images.githubusercontent.com/59030105/124018218-9eb67e00-d9b5-11eb-9572-191a0233ce22.gif)

## Tech Used

html, css, javascript, node.js

## Motivation

I wanted to create a simple note taking application where the user can keep track of his notes for the week. I would personally use it as a weekly planner, but it is at heart a simple note taker so youre more than welcome to use it as you feel neccessary.

## GIVEN a note-taking application

```
WHEN I open the Terminal in Node.js
THEN I am presented with prompts asking about employee information

WHEN I the prompts are presented
THEN I am instructed to enter an amount of employees you want to add, their names, roles, github, email based on which employee you choose.

WHEN I finish filling out all the information for the employee cards
THEN an html file is generated in the file directory

WHEN I oepn the html in the browser
THEN I am presented with all of the cards the user generated in the node terminal
```

## Contact Information

- Brendan Kurylo
- 603-818-0578
- bkrendan12@gmail.com
- Rollinsford, NH

## Credits include:

All work created by Brendan Kurylo.

UNH Bootcamp © Brendan Kurylo

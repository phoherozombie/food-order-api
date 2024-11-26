const express = require("express");
const foodRouter = require("./food.router");

module.exports = (app) => {
    app.use("/foods", foodRouter);
};

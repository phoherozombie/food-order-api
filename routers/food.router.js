const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");

router.route("/")
    .get(foodController.getData)
    .post(foodController.createFood);

router.route("/:id")
    .get(foodController.getFoodById)
    .post(foodController.updateFood) // Sử dụng POST để submit form cập nhật
    .delete(foodController.deleteFood);

module.exports = router;

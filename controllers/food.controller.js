const foodModel = require("../models/food.model");

const foodController = {
    // Lấy tất cả món ăn và hiển thị
    getData: async (req, res) => {
        try {
            const dataFood = await foodModel.find();
            res.render('food', { dataFood });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching food data');
        }
    },

    // Lấy món ăn theo ID
    getFoodById: async (req, res) => {
        const { id } = req.params;
        try {
            const foodItem = await foodModel.findById(id);
            if (!foodItem) return res.status(404).send('Food not found');
            res.render('food_detail', { foodItem });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching food item');
        }
    },

    // Thêm món ăn mới
    createFood: async (req, res) => {
        const { name, price, img, address, category_id } = req.body;
        try {
            const newFood = new foodModel({ name, price, img, address, category_id });
            await newFood.save();
            res.redirect('/foods');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creating food item');
        }
    },

    // Cập nhật món ăn
    updateFood: async (req, res) => {
        const { id } = req.params;
        const updates = req.body;
        try {
            const updatedFood = await foodModel.findByIdAndUpdate(id, updates, { new: true });
            if (!updatedFood) return res.status(404).send('Food not found');
            res.redirect('/foods');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error updating food item');
        }
    },

    // Xóa món ăn
    deleteFood: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedFood = await foodModel.findByIdAndDelete(id);
            if (!deletedFood) return res.status(404).send('Food not found');
            res.redirect('/foods');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting food item');
        }
    }
};

module.exports = foodController;

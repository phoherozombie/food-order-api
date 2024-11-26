require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const connectDB = require("./configs/database");
const router = require("./routers");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

connectDB();
router(app);

// Sử dụng EJS
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/foods`);
});

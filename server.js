const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');



const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Routes go here
const tracksRouter = require('./controllers/tracks');
app.use('/tracks', tracksRouter);


app.listen(3000, () => {
    console.log('The express app is ready!');
});

const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const tracksRouter = require('./controllers/tracks');


const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());

// Enable parsing of JSON bodies in requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Enable method override to support PUT and DELETE requests via forms
app.use(methodOverride('_method'));

// Routes go here
app.use('/tracks', tracksRouter);

app.listen(3000, () => {
    console.log('The express app is ready!');
});

const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Enable CORS for all routes
app.use(cors());

// Enable parsing of JSON bodies in requests
app.use(express.json());

// Enable method override to support PUT and DELETE requests via forms
app.use(methodOverride('_method'));

// Routes go here
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);

app.listen(3000, () => {
    console.log('The express app is ready!');
});

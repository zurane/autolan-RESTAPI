// server.js

require('dotenv').config();

const express = require('express');

const manufacturerRoutes = require('./routes/manufacturerRoutes');
const modelRoutes = require('./routes/modelRoutes');
const tutorialRoutes = require('./routes/tutorialRoutes');

const app = express();

app.use(express.json());

// Register routes
app.use('/manufacturers', manufacturerRoutes);
app.use('/models', modelRoutes);
app.use('/tutorials', tutorialRoutes);

// Basic test route
app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
const express = require('express');
const mongoose = require('mongoose');

// Create an instance of an Express app
const app = express();
const PORT = 3000;  // You can change the port if needed

// MongoDB Atlas connection string
const MONGO_URI = 'mongodb://suraj_sonar:SurajVipul@myfirstcluster-shard-00-00.it5acqc.mongodb.net:27017,myfirstcluster-shard-00-01.it5acqc.mongodb.net:27017,myfirstcluster-shard-00-02.it5acqc.mongodb.net:27017/?appName=myfirstcluster';

// Connect to MongoDB Atlas (no need to pass `useNewUrlParser` or `useUnifiedTopology`)
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a simple route to check the connection
app.get('/', (req, res) => {
  res.send('MongoDB Atlas connected successfully!');
});

app.get('/student_all', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});
// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
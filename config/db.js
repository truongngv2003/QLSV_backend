const mongoose = require('mongoose');

const MONGO_URI='mongodb+srv://freeCodeCampTruong:123CodeGa@cluster0.mgj6dtm.mongodb.net/QLSV?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { connectDB };

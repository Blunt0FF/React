const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Pro100Dev:ZJAZkVZUNZDIuY6u@cluster0.nz5n9.mongodb.net/authDB',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
    process.exit(1)
  }
}

module.exports = connectDB

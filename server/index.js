const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const userDataRoutes = require('./routes/userData');
app.use('/api/userData', userDataRoutes);


const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes); // This enables /api/auth/register and /api/auth/login

app.get('/', (req, res) => {
  res.send('API is running...');
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

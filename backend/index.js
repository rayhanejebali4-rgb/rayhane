const express = require('express');
const cors = require('cors');

const { bd } = require('./src/config/bd');
const reviewRoutes = require('./src/modules/reviews/routers/review.routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

app.use('/api/reviews', reviewRoutes);

const PORT = 5000;

bd.authenticate()
  .then(() => {
    console.log('Database connected successfully!');

    return bd.sync({ alter: true });
  })
  .then(() => {
    console.log('Tables synchronized successfully!');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
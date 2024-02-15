const express = require('express');
const app = express();
const { commonMiddleware } = require('./middleware/applicationMiddleware');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Express setup and configurations
app.use(express.json());
app.use(commonMiddleware);

// Routes
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});

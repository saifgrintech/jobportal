const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

require("./db/connection");

const port = process.env.PORT || 5000;

const cors = require('cors');
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json({ extended: false }));

const jobRouter = require("./routes/jobRoutes");
const userRouter = require("./routes/userRoutes");

app.use('/api', jobRouter);
app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Connection is setup at port ${port}`);

});

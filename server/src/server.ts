import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';

import connectDB from "./config/database";
import AppRouter from "./routes";

const app = express();
const router = new AppRouter(app);

// Connect to MongoDB
connectDB();

// Express configuration
app.set("port", 5000);
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors({origin: "*", credentials: true}));
router.init();

const start = async () => {
  try {
    const port = app.get('port')
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
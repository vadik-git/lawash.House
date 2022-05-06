import express from "express";
import AppRouter from "./routes";

const app = express();
const router = new AppRouter(app);

app.set("port", 5000);
app.use(express.json());

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
import { ConnectionOptions, connect } from "mongoose";

import { MongoDB_URL } from "../consts";

const connectDB = async () => {
  try {
    const mongoURI: string = MongoDB_URL;
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err)
    process.exit(1);
  }
};

export default connectDB;

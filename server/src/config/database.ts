import { ConnectionOptions, connect } from "mongoose";

const url = "mongodb+srv://lawash:lawash_house@cluster0.k2ghd.mongodb.net/lawashDB?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    const mongoURI: string = url;
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

import { model, Model, Schema } from "mongoose";
import { ILawash } from "../../types";

const lawash: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    require: true
  },
  price: {
    type: Number,
    require: true
  }
}, {
  versionKey: false
});

export const Lawash: Model<ILawash> = model("Lawash", lawash);


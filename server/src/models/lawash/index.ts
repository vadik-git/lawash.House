import { model, Model, Schema } from "mongoose";
import { ILawash } from "../../types";

const lawash: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  image: {
    type: Object,
    require: true
  },
  ingredients: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

export const Lawash: Model<ILawash> = model("Lawash", lawash);


import { Document } from "mongoose";

export interface ILawash extends Document {
  _id: string,
  title: string,
  description: string,
  data: string,
  isActive: boolean,
  price: number
}
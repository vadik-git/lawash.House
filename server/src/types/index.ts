import { Document } from "mongoose";

export interface ILawash extends Document {
  title: string,
  description: string,
  data: string,
  isActive: boolean,
  price: number
}
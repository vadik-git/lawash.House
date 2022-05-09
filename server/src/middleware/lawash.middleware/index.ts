import Joi, { Schema } from "joi";
import { RequestHandler } from "express";

import { validationErrorMessage } from "../../utils/createErrorMessages";

const validateLawashBody: Schema = Joi.object({
  _id: Joi.string(),
  title: Joi.string().required().min(1).max(40).messages(validationErrorMessage('string', 'title')),
  description: Joi.string().required().min(1).messages(validationErrorMessage('string', 'description')),
  date: Joi.date().required().messages(validationErrorMessage('date', 'date')),
  isActive: Joi.boolean().required().messages(validationErrorMessage('boolean', 'isActive')),
  price: Joi.number().required().messages(validationErrorMessage('number', 'price'))
});

export const ValidateBodyReq: RequestHandler = async(req, res, next) => {
  try {    
    await validateLawashBody.validateAsync(req.body);
    next();
  } catch (e: any) {
    res.status(400).json(e.details);
  }
};

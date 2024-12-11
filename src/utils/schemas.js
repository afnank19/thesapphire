import Joi from 'joi';

export const signUpFormSchema = Joi.object({
  name: Joi.string()
    .min(2) // Minimum 2 characters for the name
    .max(50) // Maximum 50 characters for the name
    .required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name should have at least 2 characters',
      'string.max': 'Name should not exceed 50 characters'
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } }) // Email validation
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address'
    }),

  password: Joi.string()
    .min(8) // Minimum 8 characters
    .max(30) // Maximum 30 characters
    .pattern(new RegExp('^[a-zA-Z0-9@#$%^&*!]+$')) // Allows letters, numbers, and special characters
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password cannot exceed 30 characters',
      'string.pattern.base':
        'Password can only contain letters, numbers, and @#$%^&*!'
    }),

  cms: Joi.string()
    .pattern(/^\d{11}$/) // Matches exactly 11 digits
    .required()
    .messages({
      'string.empty': 'CMS is required',
      'string.pattern.base': 'CMS must be an 11-digit number'
    }),

  campus: Joi.valid('Military College of Signals').required().messages({
    'string.empty': 'Campus is required',
    'any.only': 'Please pick a campus'
  })
});

import express from 'express';
import { celebrate, Joi } from 'celebrate';

import SMSController from './controllers/SMSController';
import RegisteredController from './controllers/RegisteredController';

const smsController = new SMSController();
const registeredController = new RegisteredController();

const routes = express.Router();

routes.get('/registered', registeredController.index);
routes.post('/registered',
celebrate({
  body: Joi.object().keys({
    phone: Joi.string().required(),
    cep: Joi.string().required(),
  })
}, {
  abortEarly: false,
}), registeredController.create);

routes.get('/sms', smsController.index);
routes.post(
  '/sms',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      sms: Joi.string().required(),
    })
  }, {
    abortEarly: false,
  }),
  smsController.create
);

export default routes;

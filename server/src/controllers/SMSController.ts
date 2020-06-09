import { Request, Response } from 'express';

import knex from '../database/connection';

class SMSController {
  async index(request: Request, response: Response) {
    const sms_sent = await knex('sms_sent').select('*');

    return response.json(sms_sent);
  }

  async create(request: Request, response: Response) {
    const { name, sms } = request.body;
    const registered_users = await knex('registered_users').select('*');

    registered_users.map(user => {
      // send sms
      // necessary background jobs with Redis
    });

    await knex('sms_sent').insert({ name, sms });

    return response.json({
      name,
      sms
    });
  }
}

export default SMSController;

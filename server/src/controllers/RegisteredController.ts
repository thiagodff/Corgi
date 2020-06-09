import { Request, Response } from 'express';

import knex from '../database/connection';

class RegisteredController {
  async index(request: Request, response: Response) {
    const registered_users = await knex('registered_users').select('*');

    return response.json(registered_users);
  }

  async create(request: Request, response: Response) {
    const { phone, cep } = request.body;
    const registered_users = await knex('registered_users').select('*');

    const phoneExist = registered_users.find(user => user.phone === phone);

    if (phoneExist) {
      return response.json({ message: 'Duplicate phone' });
    }

    await knex('registered_users').insert({ phone, cep });

    return response.json({
      phone,
      cep
    });
  }
}

export default RegisteredController;

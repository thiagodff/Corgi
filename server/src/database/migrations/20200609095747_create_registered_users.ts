import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('registered_users', table => {
    table.increments('id').primary();
    table.string('phone').unique().notNullable();
    table.string('cep').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('registered_users');
}


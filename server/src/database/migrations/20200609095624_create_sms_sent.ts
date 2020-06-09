import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('sms_sent', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('sms').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('sms_sent');
}


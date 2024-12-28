import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("id").inTable("users");
    table.string("name").notNullable();
    table.dateTime("due_date").nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("tasks");
}

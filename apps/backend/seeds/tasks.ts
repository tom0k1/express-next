import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tasks").del();

  // Inserts seed entries
  await knex("tasks").insert([{ id: 1, user_id: 1, name: "ジムに行く" }]);
}

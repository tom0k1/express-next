import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tasks").del();

  // Inserts seed entries
  await knex("tasks").insert([{ id: 1, user_id: 1, name: "ジムに行く" }]);
  await knex("tasks").insert([
    { id: 2, user_id: 1, name: "ジムに行く2", due_date: new Date() },
  ]);
  await knex("tasks").insert([{ id: 3, user_id: 1, name: "ジムに行く3" }]);
  await knex("tasks").insert([{ id: 4, user_id: 1, name: "ジムに行く4" }]);
}

import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("users").del();

  await knex("users").insert([
    { id: 1, first_name: "Tomoki", last_name: "Yokoyama" },
  ]);
}

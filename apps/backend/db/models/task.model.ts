import { Model } from "objection";

export class Task extends Model {
  static get tableName() {
    return "tasks";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName"],

      properties: {
        id: { type: "integer" },
        parentId: { type: ["integer", "null"] },
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        age: { type: "number" },
        address: {
          type: "object",
          properties: {
            street: { type: "string" },
            city: { type: "string" },
            zipCode: { type: "string" },
          },
        },
      },
    };
  }
}

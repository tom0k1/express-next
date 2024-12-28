import { Model } from "objection";
import KnexFile from "../knexfile";
import Knex from "knex";

const environment = "development";
const knex = Knex(KnexFile[environment]);

Model.knex(knex);

export default knex;

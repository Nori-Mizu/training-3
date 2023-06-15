/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("task_table", function (table) {
    table.increments("id").primary();
    table.string("task").notNullable();
    table.string("assignee").notNullable();
    table.date("due_date").notNullable();
    table.boolean("completed").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("task_table");
};

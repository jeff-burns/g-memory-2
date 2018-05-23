const knex = require("./database-connection");

module.exports = {
  list() {
    return knex("coffees");
  },
  read(id) {
    return knex("coffees")
      .select()
      .where("id", id)
      .first();
  },
  create(resolution) {
    return knex("coffees")
      .insert(resolution)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, resolution) {
    return knex("coffees")
      .update(resolution)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return knex("coffees")
      .delete()
      .where("id", id)

  }
};


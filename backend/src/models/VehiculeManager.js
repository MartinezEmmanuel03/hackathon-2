const AbstractManager = require("./AbstractManager");

class vehiculeManager extends AbstractManager {
  constructor() {
    super({ table: "vehicule" });
  }

  findAllForCards() {
    return this.connection.query(
      `select photo, nameV, film, id from  ${this.table}`
    );
  }

  rand(number) {
    return this.connection.query(
      `select id, photo, nameV, film from  ${this.table} ORDER BY rand() LIMIT ?`,
      [number]
    );
  }
}

module.exports = vehiculeManager;

const AbstractManager = require("./AbstractManager");

class VehiculeManager extends AbstractManager {
  constructor() {
    super({ table: "vehicule" });
  }

  rand(number) {
    return this.connection.query(
      `select photo, nameV, film from  ${this.table} ORDER BY rand() LIMIT ?`,
      [number]
    );
  }
}

module.exports = VehiculeManager;

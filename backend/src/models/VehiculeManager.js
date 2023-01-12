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
}

module.exports = vehiculeManager;

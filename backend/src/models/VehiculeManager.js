const AbstractManager = require("./AbstractManager");

class vehiculeManager extends AbstractManager {
  constructor() {
    super({ table: "vehicule" });
  }
}

module.exports = vehiculeManager;

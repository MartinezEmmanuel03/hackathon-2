const AbstractManager = require("./AbstractManager");

class VehiculeManager extends AbstractManager {
  constructor() {
    super({ table: "vehicule" });
  }
}

module.exports = VehiculeManager;

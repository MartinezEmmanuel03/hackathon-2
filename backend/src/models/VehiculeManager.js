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

  insert(vehicule, vehiculePhoto, vehiculeft) {
    return this.connection.query(
      `insert into ${this.table} (lieu, dateDispo, disp, typeV, prix, photo, FicheTech, nameV, film, km, id_users) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        vehicule.lieu,
        vehicule.dateDispo,
        vehicule.disp,
        vehicule.typeV,
        vehicule.prix,
        vehiculePhoto,
        vehiculeft,
        vehicule.nameV,
        vehicule.film,
        vehicule.km,
        vehicule.id_users,
      ]
    );
  }

  findByFilm(searchMovie) {
    let query = `select film from ${this.table}`;
    const value = [];
    if (searchMovie) {
      query += " where film like %";
      value.push(`${searchMovie}%`);
    }
    query += "limit 5";
    return this.connection.query(query, value);
  }
}

module.exports = vehiculeManager;

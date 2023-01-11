const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (email, password, role, location, name) values (?,?,?,?,?)`,
      [users.email, users.password, users.role, users.location, users.name]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${this.table} set email = ?, password = ?, role = ?, location = ?, name = ? where id = ?`,
      [
        users.email,
        users.password,
        users.role,
        users.location,
        users.name,
        users.id,
      ]
    );
  }
}
module.exports = UsersManager;

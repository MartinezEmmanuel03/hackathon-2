const models = require("../models");

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([users]) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.users
    .find(req.params.id)
    .then(([users]) => {
      if (users[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(users[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  browse,
  read,
};

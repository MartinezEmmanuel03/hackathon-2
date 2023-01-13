const models = require("../models");

const read = (req, res) => {
  models.vehicule
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browse = (req, res) => {
  models.vehicule
    .findAllForCards()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const find = (req, res) => {
  const { searchVehicule } = req.query;
  models.vehicule
    .findByFilm(searchVehicule)
    .then(([newVehicule]) => {
      res.send(newVehicule);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const random = (req, res) => {
  models.vehicule
    .rand(3)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  read,
  random,
  browse,
  find,
};

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

const add = (req, res) => {
  let vehicule = req.body.data;
  const vehiculePhoto = `public/assets${
    req.files.images ? req.files.images[0].filename : "/images/Avatar.png"
  }`;
  const vehiculeft = `public/assets${
    req.files.ft ? req.files.ft[0].filename : "/ft/cv.png"
  }`;
  vehicule = JSON.parse(vehicule);
  models.vehicule
    .insert(vehicule, vehiculePhoto, vehiculeft)
    .then(([result]) => {
      res.location(`/vehicules/${result.insertId}`).sendStatus(201);
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
  add,
  find,
};

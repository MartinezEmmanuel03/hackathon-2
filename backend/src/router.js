const express = require("express");
const VehiculeController = require("./controllers/VehiculeController");
const usersControllers = require("./controllers/usersControllers");

const router = express.Router();

router.get("/vehicules", VehiculeController.browse);
router.get("/vehicule/random", VehiculeController.random);
router.get("/vehicule/:id", VehiculeController.read);
router.get("/vehicules", VehiculeController.find);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);

module.exports = router;

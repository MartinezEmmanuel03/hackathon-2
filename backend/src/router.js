const express = require("express");
const VehiculeController = require("./controllers/VehiculeController");
const usersControllers = require("./controllers/usersControllers");
const { hashPassword } = require("./service/Auth");

const router = express.Router();

router.get("/vehicules", VehiculeController.browse);
router.get("/vehicule/random", VehiculeController.random);
router.get("/vehicule/:id", VehiculeController.read);
router.get("/vehicules", VehiculeController.find);

router.post("/login", usersControllers.validateUser);
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", hashPassword, usersControllers.add);

module.exports = router;

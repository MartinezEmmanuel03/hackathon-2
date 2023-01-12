const express = require("express");
const vehiculeController = require("./controllers/vehiculeController");
const vehiculesController = require("./controllers/vehiculesController");
const usersControllers = require("./controllers/usersControllers");

const router = express.Router();

router.get("/vehicules", vehiculesController.browse);
router.get("/vehicules/:id", vehiculeController.read);

router.get("/vehicule/random", VehiculeController.random);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);

module.exports = router;

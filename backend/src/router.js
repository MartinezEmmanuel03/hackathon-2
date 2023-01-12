const express = require("express");
const VehiculeController = require("./controllers/VehiculeController");
const usersControllers = require("./controllers/usersControllers");

const router = express.Router();

router.get("/vehicule/:id", VehiculeController.read);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);

module.exports = router;

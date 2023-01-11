const express = require("express");
const VehiculeController = require("./controllers/VehiculeController");

const router = express.Router();

router.get("/vehicule/:id", VehiculeController.read);

module.exports = router;

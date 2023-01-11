const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);

module.exports = router;

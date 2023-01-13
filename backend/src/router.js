const express = require("express");
const multer = require("multer");
const VehiculeController = require("./controllers/VehiculeController");
const usersControllers = require("./controllers/usersControllers");
const { hashPassword } = require("./service/Auth");

const router = express.Router();

// configuration de l'upload vehicule
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/assets");
  },
  filename(req, file, cb) {
    const fileArray = file.originalname.split(".");
    const ext = fileArray.pop();
    const filename = fileArray.join("_").split(" ").join("_");
    cb(
      null,
      `${
        file.fieldname === "ft" ? "/ft/" : "/images/"
      }${`${filename}_${Date.now()}.${ext}`}`
    );
  },
});
const upload = multer({ storage });

// fin de la configuration de l'upload

router.get("/vehicules", VehiculeController.browse);
router.get("/vehicule/random", VehiculeController.random);
router.get("/vehicule/:id", VehiculeController.read);
router.get("/vehicules", VehiculeController.find);

router.post("/login", usersControllers.validateUser);
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post(
  "/vehicules",
  upload.fields([
    { name: "images", maxCount: 1 },
    { name: "ft", maxCount: 1 },
  ]),
  VehiculeController.add
);

router.post("/users", hashPassword, usersControllers.add);

module.exports = router;

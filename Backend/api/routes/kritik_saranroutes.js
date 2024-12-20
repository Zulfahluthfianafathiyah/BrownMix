
const express = require("express");
const router = express.Router();
const {
  createKritikSaran,
  getKritikSaran,
 
} = require("../controller/kritik_sarancontroller");

router.get("/", getKritikSaran);
router.post("/", createKritikSaran);

module.exports = router;

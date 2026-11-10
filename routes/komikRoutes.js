const express = require("express");
const router = express.Router();
const komikController = require("../controllers/komikController");

const {
  komikschema,
  idschema,
  validatebody,
  validateparams,
} = require("../migrations/komikvalidator");

router.get("/komik", komikController.getAllKomik);
router.get("/komik/:id", validateparams(idschema), komikController.getKomikById);
router.post("/komik", validatebody(komikschema), komikController.createKomik);
router.put(
  "/komik/:id",
  validateparams(idschema),
  validatebody(komikschema),
  komikController.updateKomik,
);
router.delete("/komik/:id", validateparams(idschema), komikController.deleteKomik);

module.exports = router;

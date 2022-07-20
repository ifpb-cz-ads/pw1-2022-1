const express = require("express");
const router = express.Router();

const controller = require("../controllers/controllers");

router.get("/", controller.home);
router.get("/new-entry", controller.getEntryForm);
//router.get("/new-entry-fetch", controller.getEntryFormFetch);
router.post("/new-entry", controller.createEntry);

module.exports = router;

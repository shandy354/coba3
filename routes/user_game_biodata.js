const express = require("express");

const router = express.Router();
const controller= require('../controller/index')

router.get("/",controller.biodata.getAll);
router.get("/:id",controller.biodata.getId);
router.post("/",controller.biodata.create);
router.put("/:id",controller.biodata.updateId);
router.delete("/:id",controller.biodata.deleteId);
module.exports = router;
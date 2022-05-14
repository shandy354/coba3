const express = require("express");

const router = express.Router();
const controller= require('../controller/index')
// const {
//   getAll,
//   getId,
//   create,
//   updateId,
//   deleteId,
// } = require("../controller/user_game_history.controller");

router.get("/",controller.history.getAll);
router.get("/:id",controller.history.getId);
router.post("/",controller.history.create);
router.put("/:id",controller.history.updateId);
router.delete("/:id",controller.history.deleteId);
module.exports = router;
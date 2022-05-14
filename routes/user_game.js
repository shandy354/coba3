const express = require("express");

const router = express.Router();
const controller= require('../controller/index')
// const {
//   getAll,
//   getId,
//   create,
//   updateId,
//   deleteId,
// } = require("../controller/user_game_controller");

router.get("/",controller.user.getAll);
router.get("/:id",controller.user.getId);
router.post("/",controller.user.create);
router.put("/:id",controller.user.updateId);
router.delete("/:id",controller.user.deleteId);
module.exports = router;
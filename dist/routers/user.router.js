"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.userController.findAll);
router.post("/", user_controller_1.userController.create);
router.put("/:id", user_middleware_1.userMiddleware.findByIdOrThrow, user_controller_1.userController.updateById);
router.delete("/:id", user_controller_1.userController.deleteById);
exports.userRouter = router;

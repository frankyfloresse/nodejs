"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./routers/user.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/users", user_router_1.userRouter);
app.use((err, req, res, next) => {
    const status = err?.status || 500;
    res.status(status).json({
        message: err?.message || "Internal Server Error",
        status,
    });
});
const PORT = 5100;
app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`);
});

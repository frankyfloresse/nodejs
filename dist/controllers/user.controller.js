"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_db_1 = require("../db/users.db");
class UserController {
    async findAll(_req, res, next) {
        try {
            res.json(users_db_1.users);
        }
        catch (e) {
            next(e);
        }
    }
    create(req, res) {
        const hubkaBob = req.body;
        users_db_1.users.push(hubkaBob);
        res.status(201).json({ message: "Hubka Bob created" });
    }
    async updateById(req, res) {
        console.log(req.params);
        const { id } = req.params;
        const updatedHubka = req.body;
        users_db_1.users[+id] = updatedHubka;
        res.status(200).json({
            message: "Hubka Bob updated successfully",
            data: users_db_1.users[+id],
        });
    }
    async deleteById(req, res) {
        const { id } = req.params;
        users_db_1.users.splice(+id, 1);
        res.status(200).json({
            message: "Hubka Bob deleted",
            data: users_db_1.users[+id],
        });
    }
}
exports.userController = new UserController();

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 5100;
const hubkaBobs = [
    {
        name: "Hubka Bob1",
        age: 18,
        gender: "other",
    },
    {
        name: "Hubka Bob2",
        age: 18,
        gender: "other",
    },
    {
        name: "Hubka Bob3",
        age: 18,
        gender: "other",
    },
    {
        name: "Hubka Bob4",
        age: 18,
        gender: "other",
    },
    {
        name: "Hubka Bob5",
        age: 18,
        gender: "other",
    },
];
app.get("/hubkabobs", (_req, res) => {
    res.json(hubkaBobs);
});
app.post("/hubkabobs", (req, res) => {
    const hubkaBob = req.body;
    hubkaBobs.push(hubkaBob);
    res.status(201).json({ message: "Hubka Bob created" });
});
app.put("/hubkabobs/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const updatedHubka = req.body;
    hubkaBobs[+id] = updatedHubka;
    res.status(200).json({
        message: "Hubka Bob updated successfully",
        data: hubkaBobs[+id],
    });
});
app.delete("/hubkabobs/:id", (req, res) => {
    const { id } = req.params;
    hubkaBobs.splice(+id, 1);
    res.status(200).json({
        message: "Hubka Bob deleted",
        data: hubkaBobs[+id],
    });
});
app.listen(PORT, () => {
    mongoose.connect("mongodb://127.0.0.1:27017");
    console.log(`Server has started on PORT ${PORT}`);
});

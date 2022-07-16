"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    res.status(200).json({ message: "hello world" });
});
app.listen(process.env.PORT, () => console.log("Server running at PORT " + process.env.PORT));

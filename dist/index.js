"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var usuarios_routes_1 = __importDefault(require("./routes/usuarios.routes"));
var app_1 = require("./routes/app");
(0, typeorm_1.createConnection)();
//routes
app_1.app.use('/usuarios', usuarios_routes_1.default);

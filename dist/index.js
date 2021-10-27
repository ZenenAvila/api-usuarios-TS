"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var usuarios_routes_1 = __importDefault(require("./routes/usuarios.routes"));
var app_1 = require("./routes/app");
(0, typeorm_1.createConnection)();
app_1.app.use(express_1.default.json());
app_1.app.use(express_1.default.urlencoded({ extended: true }));
//routes
app_1.app.use('/usuarios', usuarios_routes_1.default);

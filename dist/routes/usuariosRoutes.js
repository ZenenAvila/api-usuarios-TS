"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const usuariosController = require('../controllers/usuariosController');
router.get("/mostrartodos", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuariosController.mostrarTodosCntrlr();
        response.json(usuarios);
    }
    catch (error) {
        console.log(`error mostrartodos(routers): ${error}`);
    }
}));
router.get("/mostrar", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuariosController.mostrarCntrlr();
        response.json(usuarios);
    }
    catch (error) {
        console.log(`error mostrar(routers): ${error}`);
    }
}));
//insertar usuariosn
router.post('/insertar', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuariosController.insertarCntrlr(request.body.nombre, request.body.apellidos, request.body.password);
        response.json(usuarios);
    }
    catch (error) {
        console.log(`error insertar(routers): ${error}`);
    }
}));
router.post('/actualizar', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuariosController.actualizarCntrlr(request.body.id, request.body.nombre, request.body.apellidos, request.body.password);
        response.json(usuarios);
    }
    catch (error) {
        console.log(`error actualizar(routers): ${error}`);
    }
}));
router.post('/eliminar', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuariosController.eliminarCntrlr(request.body.id);
        response.json(usuarios);
    }
    catch (error) {
        console.log(`error eliminar(routers): ${error}`);
    }
}));
module.exports = router;

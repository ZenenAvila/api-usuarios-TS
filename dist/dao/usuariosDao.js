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
Object.defineProperty(exports, "__esModule", { value: true });
////////////  Requerimientos ////////////
const conection_1 = require("../db/conection");
const mostrarTodosDao = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield conection_1.pool.query(`select * from usuarios 
        order by id asc;`);
        return usuarios.rows;
    }
    catch (error) {
        console.log(`error mostrarTodos(dao): ${error}`);
    }
});
const mostrarDao = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield conection_1.pool.query(`select id,nombre, 
        apellidos,password from usuarios where eliminado=false 
        order by id asc;`);
        return usuarios.rows;
    }
    catch (error) {
        console.log(`error mostrar(dao): ${error}`);
    }
});
const insertarDao = (nombre, apellidos, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield conection_1.pool.query(`insert into usuarios
        (nombre,apellidos,password)
                values('${nombre}',
                       '${apellidos}',
                       '${btoa(password)}');`);
    }
    catch (error) {
        console.log(`error insertar(dao): ${error}`);
    }
});
const eliminarDao = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield conection_1.pool.query(`update usuarios set eliminado=true 
        where id =${id}`);
    }
    catch (error) {
        console.log(`error eliminar(dao): ${error}`);
    }
});
const actualizarDao = (id, nombre, apellidos, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield conection_1.pool.query(`update usuarios 
                set nombre='${nombre}',
                    apellidos='${apellidos}',
                    password = '${btoa(password)}'
                    where id=${id}`);
    }
    catch (error) {
        console.log(`error actualizar(dao): ${error}`);
    }
});
module.exports = { mostrarTodosDao, mostrarDao, insertarDao, eliminarDao, actualizarDao };

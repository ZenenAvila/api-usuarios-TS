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
const usuariosDao = require(`../dao/usuariosDao`);
const numeros = new RegExp('^[0-9]+$');
const letras = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
//consultar usuarios
const mostrarTodosCntrlr = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuariosDao.mostrarTodosDao();
        return usuarios;
    }
    catch (error) {
        console.log(`error mostrarTodos(controller): ${error}`);
    }
});
const mostrarCntrlr = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuariosDao.mostrarDao();
        return usuarios;
    }
    catch (error) {
        console.log(`error mostrar(controller): ${error}`);
    }
});
//insertar usuariosn
const insertarCntrlr = (nombre, apellidos, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (nombre != "" && apellidos != "" && password != "") {
            if (letras.test(nombre) && letras.test(apellidos)) {
                yield usuariosDao.insertarDao(nombre, apellidos, password);
                return ({ "respuesta": "insertado Correctamente" });
            }
            else {
                return ({ "respuesta": "El nombre y apellidos deben contener solo letras " });
            }
        }
        else {
            return ({ "respuesta": "Todos los campos son obligatorios " });
        }
    }
    catch (error) {
        console.log(`error insertar(controller): ${error}`);
    }
});
const eliminarCntrlr = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (id != "") {
            if (numeros.test(id)) {
                yield usuariosDao.eliminarDao(id);
                return ({ "respuesta": "eliminado Correctamente" });
            }
            else {
                return ({ "respuesta": "El id solo debe contener numeros " });
            }
        }
        else {
            return ({ "respuesta": "El id es obligatorio " });
        }
    }
    catch (error) {
        console.log(`error eliminar(controller): ${error}`);
    }
});
const actualizarCntrlr = (id, nombre, apellidos, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (id != "" && nombre != "" && apellidos != "" && password != "") {
            if (numeros.test(id)) {
                if (letras.test(nombre) &&
                    letras.test(apellidos)) {
                    yield usuariosDao.actualizarDao(id, nombre, apellidos, password);
                    return ({ "respuesta": "actualizado Correctamente" });
                }
                else {
                    return ({ "respuesta": "El nombre y apellidos deben contener solo letras " });
                }
            }
            else {
                return ({ "respuesta": "El id solo debe contener numeros " });
            }
        }
        else {
            return ({ "respuesta": "Todos los campos son obligatorios " });
        }
    }
    catch (error) {
        console.log(`error actualizar(controller): ${error}`);
    }
});
module.exports = { mostrarTodosCntrlr, mostrarCntrlr, insertarCntrlr, actualizarCntrlr, eliminarCntrlr };

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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminar = exports.actualizar = exports.insertar = exports.mostrarusuario = exports.mostrar = exports.mostrartodos = void 0;
var typeorm_1 = require("typeorm");
var usuarios_Dao_1 = require("../dao/usuarios.Dao");
var numeros = new RegExp('^[0-9]+$');
var letras = new RegExp('^[A-Z???????????? ]+$', 'i');
var mostrartodos = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(usuarios_Dao_1.Usuarios)
                        .createQueryBuilder("usuario")
                        .orderBy('id')
                        .getMany()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, res.json(users)];
            case 2:
                error_1 = _a.sent();
                console.log("error mostrarTodos(controller):", error_1);
                return [2 /*return*/, res.json("error mostrarTodos(controller): " + error_1)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.mostrartodos = mostrartodos;
var mostrar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(usuarios_Dao_1.Usuarios)
                        .createQueryBuilder()
                        .select('id, nombre,apellidos,password')
                        .where('eliminado=false')
                        .orderBy('id')
                        .getRawMany()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, res.json(users)];
            case 2:
                error_2 = _a.sent();
                console.log("error mostrar(controller):", error_2);
                return [2 /*return*/, res.json("error mostrar(controller): " + error_2)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.mostrar = mostrar;
var mostrarusuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                console.log(req.params.id);
                if (!(req.params.id != "")) return [3 /*break*/, 4];
                if (!numeros.test(req.params.id)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, typeorm_1.getRepository)(usuarios_Dao_1.Usuarios)
                        .createQueryBuilder()
                        .select('id, nombre,apellidos,password')
                        .where("eliminado=false and id=" + req.params.id)
                        .getRawMany()];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 2: return [2 /*return*/, res.json({ "respuesta": "El id solo debe contener numeros " })];
            case 3: return [3 /*break*/, 5];
            case 4: return [2 /*return*/, res.json({ "respuesta": "El id es obligatorio " })];
            case 5: return [3 /*break*/, 7];
            case 6:
                error_3 = _a.sent();
                console.log("error mostrarusuario(controller):", error_3);
                return [2 /*return*/, res.json("error mostrarusuario(controller): " + error_3)];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.mostrarusuario = mostrarusuario;
var insertar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var password, results, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(req.body.nombre != "" && req.body.apellidos != "" &&
                    req.body.password != "")) return [3 /*break*/, 4];
                if (!(letras.test(req.body.nombre) && letras.test(req.body.apellidos))) return [3 /*break*/, 2];
                password = btoa(req.body.password);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(usuarios_Dao_1.Usuarios)
                        .createQueryBuilder()
                        .insert()
                        .into(usuarios_Dao_1.Usuarios)
                        .values([
                        { nombre: " " + String(req.body.nombre) + " ",
                            apellidos: "" + req.body.apellidos,
                            password: "" + password
                        }
                    ])
                        .execute()];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 2: return [2 /*return*/, res.json({ "respuesta": "El nombre y apellidos deben contener solo letras " })];
            case 3: return [3 /*break*/, 5];
            case 4: return [2 /*return*/, res.json({ "respuesta": "Todos los campos son obligatorios " })];
            case 5: return [3 /*break*/, 7];
            case 6:
                error_4 = _a.sent();
                console.log("error insertar(controller):", error_4);
                return [2 /*return*/, res.json("error insertar(controller): " + error_4)];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.insertar = insertar;
var actualizar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, results, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 11, , 12]);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(usuarios_Dao_1.Usuarios).findOne(req.params.id)];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 9];
                if (!(req.params.id != "" && req.body.nombre != "" &&
                    req.body.apellidos != "" && req.body.password != "")) return [3 /*break*/, 7];
                if (!numeros.test(req.params.id)) return [3 /*break*/, 5];
                if (!(letras.test(req.body.nombre) &&
                    letras.test(req.body.apellidos))) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, typeorm_1.getRepository)(usuarios_Dao_1.Usuarios)
                        .createQueryBuilder()
                        .update(usuarios_Dao_1.Usuarios)
                        .set({ nombre: req.body.nombre,
                        apellidos: req.body.apellidos,
                        password: req.body.password })
                        .where("id = :id", { id: req.params.id })
                        .execute()];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 3: return [2 /*return*/, res.json({ "respuesta": "El nombre y apellidos deben contener solo letras " })];
            case 4: return [3 /*break*/, 6];
            case 5: return [2 /*return*/, res.json({ "respuesta": "El id solo debe contener numeros " })];
            case 6: return [3 /*break*/, 8];
            case 7: return [2 /*return*/, res.json({ "respuesta": "Todos los campos son obligatorios " })];
            case 8: return [3 /*break*/, 10];
            case 9: return [2 /*return*/, res.status(404).json({ msg: 'Not User Found XD ' })];
            case 10: return [3 /*break*/, 12];
            case 11:
                error_5 = _a.sent();
                console.log("error actualizar(controller): " + error_5);
                return [2 /*return*/, res.json("error actualizar(controller): " + error_5)];
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.actualizar = actualizar;
var eliminar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(req.params.id != "")) return [3 /*break*/, 4];
                if (!numeros.test(req.params.id)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, typeorm_1.getRepository)(usuarios_Dao_1.Usuarios)
                        .createQueryBuilder()
                        .update(usuarios_Dao_1.Usuarios)
                        .set({ eliminado: true })
                        .where("id = :id", { id: req.body.id })
                        .execute()];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 2: return [2 /*return*/, res.json({ "respuesta": "El id solo debe contener numeros " })];
            case 3: return [3 /*break*/, 5];
            case 4: return [2 /*return*/, res.json({ "respuesta": "El id es obligatorio " })];
            case 5: return [3 /*break*/, 7];
            case 6:
                error_6 = _a.sent();
                console.log("error eliminar(controller): " + error_6);
                return [2 /*return*/, res.json("error eliminar(controller): " + error_6)];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.eliminar = eliminar;

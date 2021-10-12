"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const body_parser_1 = __importDefault(require("body-parser"));
const port = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); // If needed to add
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Origin,Accept,Authorization,x-access-token'); // If needed	
    // res.setHeader('Access-Control-Allow-Credentials', "true"); // If needed
    next();
});
app.get('/', (request, response) => {
    response.json({ info: 'la API esta en ejecución' });
});
app.listen(port, () => {
    console.log(`API corriendo en el puerto ${port} (env:${process.env.NODE_ENV})`);
});

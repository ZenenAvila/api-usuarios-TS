"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
exports.app = app;
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
// const cors=require('cors');
// app.use(cors());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
var port = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); // If needed to add
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Origin,Accept,Authorization,x-access-token'); // If needed	
    res.setHeader('Access-Control-Allow-Credentials', "true"); // If needed
    next();
});
app.get('/', function (request, response) {
    response.json({ info: 'la API esta en ejecución' });
});
app.listen(port, function () {
    console.log("API corriendo en el puerto " + port + " (env:" + process.env.NODE_ENV + ")");
});

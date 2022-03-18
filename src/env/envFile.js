"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    PORT: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000",
    urlApi: process.env.API_URL
};

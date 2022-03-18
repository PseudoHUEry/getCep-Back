"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const www_1 = __importDefault(require("./src/config/www"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
(() => {
    moment_timezone_1.default.tz.setDefault('America/Sao_Paulo');
    (0, www_1.default)();
})();

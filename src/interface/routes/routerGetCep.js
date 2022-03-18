"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerGetCep_1 = __importDefault(require("../controller/controllerGetCep"));
const router = (0, express_1.Router)();
router.get('/:cep', controllerGetCep_1.default.get);
exports.default = router;

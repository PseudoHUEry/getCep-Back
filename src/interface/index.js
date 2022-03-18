"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const routerGetCep_1 = __importDefault(require("./routes/routerGetCep"));
exports.default = (() => {
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    app.use((0, morgan_1.default)("dev"));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use("/getCep", routerGetCep_1.default);
    return app;
})();

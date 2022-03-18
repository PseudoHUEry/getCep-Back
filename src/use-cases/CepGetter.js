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
const senderMessage_1 = __importDefault(require("../util/senderMessage"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
exports.default = ({ cep }) => __awaiter(void 0, void 0, void 0, function* () {
    const currentCep = cep.replace(/\D/g, '');
    const entity = yield (0, senderMessage_1.default)(currentCep);
    const method = {
        "200": {
            status: entity.status,
            message: {
                data: (0, moment_timezone_1.default)().format('YYYY/MM/DD HH:mm'),
                andress: entity === null || entity === void 0 ? void 0 : entity.address,
                code: entity === null || entity === void 0 ? void 0 : entity.code,
                city: entity === null || entity === void 0 ? void 0 : entity.city,
                district: entity === null || entity === void 0 ? void 0 : entity.district
            }
        },
        "400": {
            status: entity.status,
            message: `${entity === null || entity === void 0 ? void 0 : entity.message} - ${entity === null || entity === void 0 ? void 0 : entity.statusText}`
        },
        "404": {
            status: entity.status,
            message: `${entity === null || entity === void 0 ? void 0 : entity.message} - ${entity === null || entity === void 0 ? void 0 : entity.statusText}`
        },
        "500": {
            status: entity.status,
            message: `${entity === null || entity === void 0 ? void 0 : entity.message} - ${entity === null || entity === void 0 ? void 0 : entity.statusText}`
        }
    };
    //@ts-ignore
    return method[`${entity.status}`];
});

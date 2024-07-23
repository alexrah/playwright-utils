"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wpSessionLoginStorage = void 0;
require("dotenv/config");
var test_1 = require("@playwright/test");
var logger_1 = __importDefault(require("@alexrah/logger"));
var fs = __importStar(require("fs"));
/**
 * @param browser the browser contect from the current test
 * @param absPathToStorageFile ie: `${__dirname}/../storage/storageState.json`
 * */
var wpSessionLoginStorage = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var lg, browserLogin, pageLogin;
    var browser = _b.browser, absPathToStorageFile = _b.absPathToStorageFile, _c = _b.checkIfSuccessfull, checkIfSuccessfull = _c === void 0 ? false : _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                lg = new logger_1.default('backendLoginStorage');
                // const sStorageFilePath = `${__dirname}/../storage/storageState.json`
                lg.i('check if storageState.json exists');
                if (!fs.existsSync(absPathToStorageFile)) return [3 /*break*/, 2];
                lg.i('storageState.json exists');
                return [4 /*yield*/, browser.newContext({ storageState: absPathToStorageFile })];
            case 1: return [2 /*return*/, _d.sent()];
            case 2:
                lg.i('storageState.json not exists, creating');
                return [4 /*yield*/, test_1.chromium.launch()];
            case 3:
                browserLogin = _d.sent();
                return [4 /*yield*/, browserLogin.newPage()];
            case 4:
                pageLogin = _d.sent();
                lg.i('emulate login via wp-login.php');
                // @ts-ignore
                return [4 /*yield*/, pageLogin.goto('/wp-login.php')];
            case 5:
                // @ts-ignore
                _d.sent();
                return [4 /*yield*/, pageLogin.fill('input#user_login', process.env.USERNAME)];
            case 6:
                _d.sent();
                return [4 /*yield*/, pageLogin.fill('input#user_pass', process.env.PASSWORD)];
            case 7:
                _d.sent();
                return [4 /*yield*/, pageLogin.getByRole('button', { name: /Accedi|Login/ }).click()];
            case 8:
                _d.sent();
                if (!checkIfSuccessfull) return [3 /*break*/, 10];
                lg.i('check if logging is successful');
                return [4 /*yield*/, pageLogin.waitForSelector('#adminmenuwrap')];
            case 9:
                _d.sent();
                _d.label = 10;
            case 10:
                lg.i('save login data to fixtures/storageState.json');
                return [4 /*yield*/, pageLogin.context().storageState({ path: absPathToStorageFile })];
            case 11:
                _d.sent();
                return [4 /*yield*/, pageLogin.close()];
            case 12:
                _d.sent();
                return [4 /*yield*/, browserLogin.close()];
            case 13:
                _d.sent();
                return [4 /*yield*/, browser.newContext({ storageState: absPathToStorageFile })];
            case 14: return [2 /*return*/, _d.sent()];
        }
    });
}); };
exports.wpSessionLoginStorage = wpSessionLoginStorage;

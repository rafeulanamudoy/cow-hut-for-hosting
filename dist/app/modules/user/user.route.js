"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
exports.UserRoutes = router;
router.post('/signUp', user_controller_1.UserController.createUser);
router.get('/:id', user_controller_1.UserController.getSingleUser);
router.patch('/:id', user_controller_1.UserController.updateSingleUser);
router.delete('/:id', user_controller_1.UserController.deleteSingleUser);
router.get('/', user_controller_1.UserController.getUsers);
//api/v1/auth/signup

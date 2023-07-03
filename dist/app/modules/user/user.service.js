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
exports.UserService = void 0;
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const user_model_1 = require("./user.model");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(user);
    if ((user === null || user === void 0 ? void 0 : user.role) === 'seller' && user.budget > 0) {
        throw new ApiError_1.default(400, 'you cannot set budget  you may can set income');
    }
    else if ((user === null || user === void 0 ? void 0 : user.role) === 'buyer' && user.income > 0) {
        throw new ApiError_1.default(400, 'you cannot set income you may set budget');
    }
    else {
        const createUser = yield user_model_1.User.create(user);
        return createUser;
    }
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const getUsers = yield user_model_1.User.find({});
    return getUsers;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield user_model_1.User.findById(id);
    return getUser;
});
const updateSingleUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUser = yield user_model_1.User.findByIdAndDelete(id);
    return deleteUser;
});
exports.UserService = {
    createUser,
    getUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
};

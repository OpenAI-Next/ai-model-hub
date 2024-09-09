"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelRepository = exports.ModelRepository = void 0;
const models_1 = require("./models");
class ModelRepository {
    constructor(models) {
        this.models = models;
    }
    getAllModelNames() {
        return this.models.map(model => model.name);
    }
    getModelByName(name) {
        return this.models.find(model => model.name === name);
    }
    getModelDescription(name) {
        const model = this.getModelByName(name);
        return model === null || model === void 0 ? void 0 : model.description;
    }
    getModelPrice(name) {
        const model = this.getModelByName(name);
        return model === null || model === void 0 ? void 0 : model.price;
    }
}
exports.ModelRepository = ModelRepository;
exports.modelRepository = new ModelRepository(models_1.models);

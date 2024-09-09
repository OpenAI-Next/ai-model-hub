"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelRepository = exports.ModelRepository = void 0;
const model_json_1 = __importDefault(require("../model.json"));
class ModelRepository {
    constructor(model) {
        this.providerInfoList = model;
    }
    /**
     * 获取所有的 provider 信息
     */
    getModelList() {
        return this.providerInfoList;
    }
    /**
     * 获取所有的 provider 名称
     */
    getAllProviderNames() {
        return this.providerInfoList.map(providerInfos => providerInfos.provider);
    }
    /**
     * 获取所有的 model 名称
     */
    getAllModelNames() {
        return this.providerInfoList.reduce((acc, providerInfo) => {
            return acc.concat(providerInfo.models_list.map(model => model.name));
        }, []);
    }
    /**
     * 获取所有的 model 名称，按 provider 分组
     */
    getAllModelNamesGroupByProvider() {
        return this.providerInfoList.reduce((acc, providerInfo) => {
            acc[providerInfo.provider] = providerInfo.models_list.map(model => model.name);
            return acc;
        }, {});
    }
    /**
     * 获取指定 provider 的信息，不区分大小写
     */
    getProviderInfo(provider) {
        return this.providerInfoList.find(providerInfos => providerInfos.provider.toLowerCase() === provider.toLowerCase());
    }
    /**
     * 获取指定 provider 的所有 model 名称
     * @param provider
     */
    getAllModelNamesByProvider(provider) {
        var _a;
        return ((_a = this.providerInfoList.find(providerInfos => providerInfos.provider.toLowerCase() === provider.toLowerCase())) === null || _a === void 0 ? void 0 : _a.models_list.map(model => model.name)) || [];
    }
    /**
     * 获取指定 model 的信息
     * @param modelName
     */
    getModelInfo(modelName) {
        return this.providerInfoList.map(providerInfos => providerInfos.models_list.find(model => model.name === modelName)).find(model => model !== undefined);
    }
    /**
     * 获取指定 model 的价格信息
     * @param modelName
     */
    getModelPrice(modelName) {
        return this.providerInfoList.map(providerInfos => { var _a; return (_a = providerInfos.models_list.find(model => model.name === modelName)) === null || _a === void 0 ? void 0 : _a.price; }).find(price => price !== undefined);
    }
    /**
     * 根据关键字查找模型名称
     * @param keyword - 要查找的关键字
     * @returns 包含关键字的模型名称列表
     */
    getModelNamesByKeyword(keyword) {
        if (!keyword) {
            return [];
        }
        const lowerCaseKeyword = keyword.toLowerCase();
        return this.providerInfoList.reduce((acc, providerInfo) => {
            const matchingModels = providerInfo.models_list
                .filter(model => model.name.toLowerCase().includes(lowerCaseKeyword))
                .map(model => model.name);
            return acc.concat(matchingModels);
        }, []);
    }
}
exports.ModelRepository = ModelRepository;
exports.modelRepository = new ModelRepository(model_json_1.default);

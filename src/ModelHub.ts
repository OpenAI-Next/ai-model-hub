import File from '../model.json';
import {Model, ProviderInfo} from "./types/model";

export class ModelHub {
    providerInfoList: ProviderInfo[];

    constructor(model: ProviderInfo[]) {
        this.providerInfoList = model;
    }

    /**
     * 获取所有的 provider 信息
     */
    getAll(): ProviderInfo[] {
        return this.providerInfoList;
    }

    /**
     * 获取所有的 provider 名称
     */
    getAllProviderNames(): string[] {
        return this.providerInfoList.map(providerInfos => providerInfos.provider);
    }

    /**
     * 获取所有的 model 名称
     */
    getAllModelNames(): string[] {
        return this.providerInfoList.reduce((acc, providerInfo) => {
            return acc.concat(providerInfo.models_list.map(model => model.name));
        }, [] as string[]);
    }

    /**
     * 获取所有的 model 名称，并按 provider 分组
     */
    getAllModelNamesGroupByProvider(): { [provider: string]: string[] } {
        return this.providerInfoList.reduce((acc, providerInfo) => {
            acc[providerInfo.provider] = providerInfo.models_list.map(model => model.name);
            return acc;
        }, {} as { [provider: string]: string[] });
    }

    /**
     * 获取指定 provider 的信息，不区分大小写
     */
    getProviderInfo(provider: string): ProviderInfo | undefined {
        return this.providerInfoList.find(providerInfos => providerInfos.provider.toLowerCase() === provider.toLowerCase());
    }

    /**
     * 获取指定 provider 的所有 model 名称
     * @param provider
     */
    getAllModelNamesByProvider(provider: string): string[] {
        return this.providerInfoList.find(providerInfos => providerInfos.provider.toLowerCase() === provider.toLowerCase())?.models_list.map(model => model.name) || [];
    }

    /**
     * 获取指定 model 的信息
     * @param modelName
     */
    getModelInfo(modelName: string): Model | undefined {
        return this.providerInfoList.map(providerInfos => providerInfos.models_list.find(model => model.name === modelName)).find(model => model !== undefined);
    }

    /**
     * 获取指定 model 的价格信息
     * @param modelName
     */
    getModelPrice(modelName: string): Model['price'] | undefined {
        return this.providerInfoList.map(providerInfos => providerInfos.models_list.find(model => model.name === modelName)?.price).find(price => price !== undefined);
    }

    /**
     * 根据关键字查找模型名称，不区分大小写
     * @param keyword - 要查找的关键字
     * @returns 包含关键字的模型名称列表
     */
    getModelNamesByKeyword(keyword: string): string[] {
        if (!keyword) {
            return [];
        }

        const lowerCaseKeyword = keyword.toLowerCase();

        return this.providerInfoList.reduce((acc, providerInfo) => {
            const matchingModels = providerInfo.models_list
                .filter(model => model.name.toLowerCase().includes(lowerCaseKeyword))
                .map(model => model.name);
            return acc.concat(matchingModels);
        }, [] as string[]);
    }

}

export const modelHub = new ModelHub(File as ProviderInfo[]);

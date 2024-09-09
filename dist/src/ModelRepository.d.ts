import { Model, ProviderInfo } from "./types/model";
export declare class ModelRepository {
    private readonly providerInfoList;
    constructor(model: ProviderInfo[]);
    /**
     * 获取所有的 provider 信息
     */
    getModelList(): ProviderInfo[];
    /**
     * 获取所有的 provider 名称
     */
    getAllProviderNames(): string[];
    /**
     * 获取所有的 model 名称
     */
    getAllModelNames(): string[];
    /**
     * 获取所有的 model 名称，按 provider 分组
     */
    getAllModelNamesGroupByProvider(): {
        [provider: string]: string[];
    };
    /**
     * 获取指定 provider 的信息，不区分大小写
     */
    getProviderInfo(provider: string): ProviderInfo | undefined;
    /**
     * 获取指定 provider 的所有 model 名称
     * @param provider
     */
    getAllModelNamesByProvider(provider: string): string[];
    /**
     * 获取指定 model 的信息
     * @param modelName
     */
    getModelInfo(modelName: string): Model | undefined;
    /**
     * 获取指定 model 的价格信息
     * @param modelName
     */
    getModelPrice(modelName: string): Model['price'] | undefined;
    /**
     * 根据关键字查找模型名称
     * @param keyword - 要查找的关键字
     * @returns 包含关键字的模型名称列表
     */
    getModelNamesByKeyword(keyword: string): string[];
}
export declare const modelRepository: ModelRepository;

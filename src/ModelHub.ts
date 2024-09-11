import File from '../model.json';

export interface ProviderInfo {
    provider: string;
    id: number;
    logo: Logo;
    website: {
        home: string;
        docs: string;
        price: string;
    };
    models_list: Model[];
}

// export interface ModelSeries {
//     name: string;
//     logo: Logo;
//     models: Model[];
// }

export interface Model {
    name: string;
    release_time: string | number | null;
    category: string;
    price: {
        input: number | null;
        output: number | null;
    }[];
    description: string;
    info: ModelInfo;
    shutdown_time: number | null;
}

export interface Logo {
    icon?: {
        black_white?: string;
        color?: string;
    };
    brand?: {
        black_white?: string;
        color?: string;
    };
    text?: {
        [key: string]: string;
    };
}

export interface ModelInfo {
    max_context: number | null;
    max_tokens: number | null;
    temperature_range: [number, number] | number[] | null;
    function_call_support?: boolean;
    tool_choice_support?: boolean;
    network_search_support?: boolean;
    image_ability: {
        input: boolean;
        output: boolean;
    };
    parameter: any;
    training_data: number | null;
}

export class ModelHub {
    modelProviderInfoList: ProviderInfo[];

    constructor(model: ProviderInfo[]) {
        this.modelProviderInfoList = model;
    }

    /**
     * 获取所有的 provider 信息
     */
    getAll(): ProviderInfo[] {
        return this.modelProviderInfoList;
    }

    /**
     * 获取所有的 provider 名称
     */
    getAllProviderNames(): string[] {
        return this.modelProviderInfoList.map(providerInfos => providerInfos.provider);
    }

    /**
     * 获取所有的 model 名称
     */
    getAllModelNames(): string[] {
        return this.modelProviderInfoList.reduce((acc, providerInfo) => {
            return acc.concat(providerInfo.models_list.map(model => model.name));
        }, [] as string[]);
    }

    /**
     * 获取所有的 model 名称，并按 provider 分组
     */
    getAllModelNamesGroupByProvider(): { [provider: string]: string[] } {
        return this.modelProviderInfoList.reduce((acc, providerInfo) => {
            acc[providerInfo.provider] = providerInfo.models_list.map(model => model.name);
            return acc;
        }, {} as { [provider: string]: string[] });
    }

    /**
     * 获取指定 provider 的信息，不区分大小写
     */
    getProviderInfo(provider: string): ProviderInfo | undefined {
        return this.modelProviderInfoList.find(providerInfos => providerInfos.provider.toLowerCase() === provider.toLowerCase());
    }

    /**
     * 获取指定 provider 的所有 model 名称
     * @param provider
     */
    getAllModelNamesByProvider(provider: string): string[] {
        return this.modelProviderInfoList.find(providerInfos => providerInfos.provider.toLowerCase() === provider.toLowerCase())?.models_list.map(model => model.name) || [];
    }

    /**
     * 获取指定 model 的信息
     * @param modelName
     */
    getModelInfo(modelName: string): Model | undefined {
        return this.modelProviderInfoList.map(providerInfos => providerInfos.models_list.find(model => model.name === modelName)).find(model => model !== undefined);
    }

    /**
     * 获取指定 model 的价格信息
     * @param modelName
     */
    getModelPrice(modelName: string): Model['price'] | undefined {
        return this.modelProviderInfoList.map(providerInfos => providerInfos.models_list.find(model => model.name === modelName)?.price).find(price => price !== undefined);
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

        return this.modelProviderInfoList.reduce((acc, providerInfo) => {
            const matchingModels = providerInfo.models_list
                .filter(model => model.name.toLowerCase().includes(lowerCaseKeyword))
                .map(model => model.name);
            return acc.concat(matchingModels);
        }, [] as string[]);
    }

}

export const modelHub = new ModelHub(File);

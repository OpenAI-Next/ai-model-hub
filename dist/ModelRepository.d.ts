import { Model } from './models';
export declare class ModelRepository {
    private models;
    constructor(models: Model[]);
    getAllModelNames(): string[];
    getModelByName(name: string): Model | undefined;
    getModelDescription(name: string): string | undefined;
    getModelPrice(name: string): number | undefined;
}
export declare const modelRepository: ModelRepository;

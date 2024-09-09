"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelRepository_1 = require("./ModelRepository");
describe('ModelRepository', () => {
    test('getModelList returns correct model list', () => {
        const list = ModelRepository_1.modelRepository.getModelList();
        console.log('Model list:', list);
        expect(list).toBeDefined();
        expect(list.length).toBeGreaterThan(0);
    });
    test('getAllProviderNames returns correct providers', () => {
        const providers = ModelRepository_1.modelRepository.getAllProviderNames();
        console.log('All model providers:', providers);
        expect(providers).toContain('OpenAI');
        expect(providers).toContain('QiHu360');
    });
    test('getAllModelNames returns all model names', () => {
        const names = ModelRepository_1.modelRepository.getAllModelNames();
        console.log('All model names:', names);
        expect(names).toContain('gpt-3.5-turbo');
        expect(names).toContain('gpt-4');
        expect(names).toContain('claude-3-5-sonnet-20240620');
    });
    test('getAllModelNamesGroupByProvider returns correct model names grouped by provider', () => {
        const names = ModelRepository_1.modelRepository.getAllModelNamesGroupByProvider();
        console.log('Model names grouped by provider:', names);
        expect(names['OpenAI']).toContain('gpt-3.5-turbo');
        expect(names['OpenAI']).toContain('gpt-4');
        expect(names['Anthropic']).toContain('claude-3-5-sonnet-20240620');
    });
    test('getAllModelNamesByProvider returns correct model names', () => {
        const names = ModelRepository_1.modelRepository.getAllModelNamesByProvider('OpenAI');
        console.log('Model names by provider:', names);
        expect(names).toContain('gpt-3.5-turbo');
        expect(names).toContain('gpt-4');
    });
    test('getAllModelNamesByProvider returns empty array for non-existent provider', () => {
        const names = ModelRepository_1.modelRepository.getAllModelNamesByProvider('TEST');
        expect(names).toEqual([]);
    });
    test('getProviderInfo returns correct provider info', () => {
        const provider = ModelRepository_1.modelRepository.getProviderInfo('OpenAI');
        console.log('Provider info:', provider);
        expect(provider).toBeDefined();
        expect(provider === null || provider === void 0 ? void 0 : provider.website.home).toBe('https://openai.com');
    });
    test('getProviderInfo returns undefined for non-existent provider', () => {
        const provider = ModelRepository_1.modelRepository.getProviderInfo('TEST');
        expect(provider).toBeUndefined();
    });
    test('getModelInfo returns correct model info', () => {
        const model = ModelRepository_1.modelRepository.getModelInfo('gpt-3.5-turbo');
        console.log('Model info:', model);
        expect(model).toBeDefined();
        expect(model === null || model === void 0 ? void 0 : model.name).toBe('gpt-3.5-turbo');
    });
    test('getModelInfo returns undefined for non-existent model', () => {
        const model = ModelRepository_1.modelRepository.getModelInfo('TEST');
        expect(model).toBeUndefined();
    });
    test('getModelPrice returns correct model price', () => {
        const price = ModelRepository_1.modelRepository.getModelPrice('gpt-3.5-turbo');
        console.log('Model price:', price);
        expect(price).toBeDefined();
        expect(price === null || price === void 0 ? void 0 : price[0].input).toBe(0.5);
        expect(price === null || price === void 0 ? void 0 : price[0].output).toBe(1.5);
    });
    test('getModelPrice returns undefined for non-existent model', () => {
        const price = ModelRepository_1.modelRepository.getModelPrice('TEST');
        expect(price).toBeUndefined();
    });
    test('getModelNamesByKeyword returns correct model names', () => {
        const names = ModelRepository_1.modelRepository.getModelNamesByKeyword('claude');
        console.log('Model names by keyword:', names);
        expect(names).toContain('claude-3-5-sonnet-20240620');
        expect(names).toContain('claude-3-opus-20240229');
        expect(names).toContain('claude-3-haiku-20240307');
        expect(names).toContain('claude-3-sonnet-20240229');
    });
});

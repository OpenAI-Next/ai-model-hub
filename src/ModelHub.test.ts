import File from '../model.json';
import {modelHub} from "./index";

describe('modelHub', () => {

    test('getModelList returns correct model list', () => {
        const list = modelHub.getModelList();
        console.log('Model list:', list);
        expect(list).toBeDefined();
        expect(list.length).toBeGreaterThan(0);
    });

    test('getAllProviderNames returns correct providers', () => {
        const providers = modelHub.getAllProviderNames();
        console.log('All model providers:', providers);
        expect(providers).toContain('OpenAI');
        expect(providers).toContain('QiHu360');
    });

    test('getAllModelNames returns all model names', () => {
        const names = modelHub.getAllModelNames();
        console.log('All model names:', names);
        expect(names).toContain('gpt-3.5-turbo');
        expect(names).toContain('gpt-4');
        expect(names).toContain('claude-3-5-sonnet-20240620');
    });

    test('getAllModelNamesGroupByProvider returns correct model names grouped by provider', () => {
        const names = modelHub.getAllModelNamesGroupByProvider();
        console.log('Model names grouped by provider:', names);
        expect(names['OpenAI']).toContain('gpt-3.5-turbo');
        expect(names['OpenAI']).toContain('gpt-4');
        expect(names['Anthropic']).toContain('claude-3-5-sonnet-20240620');
    });

    test('getAllModelNamesByProvider returns correct model names', () => {
        const names = modelHub.getAllModelNamesByProvider('OpenAI');
        console.log('Model names by provider:', names);
        expect(names).toContain('gpt-3.5-turbo');
        expect(names).toContain('gpt-4');
    });

    test('getAllModelNamesByProvider returns empty array for non-existent provider', () => {
        const names = modelHub.getAllModelNamesByProvider('TEST');
        expect(names).toEqual([]);
    });

    test('getProviderInfo returns correct provider info', () => {
        const provider = modelHub.getProviderInfo('OpenAI');
        console.log('Provider info:', provider);
        expect(provider).toBeDefined();
        expect(provider?.website.home).toBe('https://openai.com');
    })

    test('getProviderInfo returns undefined for non-existent provider', () => {
        const provider = modelHub.getProviderInfo('TEST');
        expect(provider).toBeUndefined();
    })

    test('getModelInfo returns correct model info', () => {
        const model = modelHub.getModelInfo('gpt-3.5-turbo');
        console.log('Model info:', model);
        expect(model).toBeDefined();
        expect(model?.name).toBe('gpt-3.5-turbo');
    })

    test('getModelInfo returns undefined for non-existent model', () => {
        const model = modelHub.getModelInfo('TEST');
        expect(model).toBeUndefined();
    })

    test('getModelPrice returns correct model price', () => {
        const price = modelHub.getModelPrice('gpt-3.5-turbo');
        console.log('Model price:', price);
        expect(price).toBeDefined();
        expect(price?.[0].input).toBe(0.5);
        expect(price?.[0].output).toBe(1.5);
    })

    test('getModelPrice returns undefined for non-existent model', () => {
        const price = modelHub.getModelPrice('TEST');
        expect(price).toBeUndefined();
    })

    test('getModelNamesByKeyword returns correct model names', () => {
        const names = modelHub.getModelNamesByKeyword('claude');
        console.log('Model names by keyword:', names);
        expect(names).toContain('claude-3-5-sonnet-20240620');
        expect(names).toContain('claude-3-opus-20240229');
        expect(names).toContain('claude-3-haiku-20240307');
        expect(names).toContain('claude-3-sonnet-20240229');
    });

});

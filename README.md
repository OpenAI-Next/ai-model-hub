# AI-Model-Hub

## Overview
`AI-Model-Hub` is a powerful utility that provides access to the latest AI model information. It allows you to easily retrieve details about AI models and their providers, making it a valuable tool for developers working with AI services.

## Installation

Install the package using `yarn`:

```bash
yarn add ai-model-hub
```

Alternatively, you can install it using `npm`:

```bash
npm install ai-model-hub
```

## Usage

Once installed, you can import and utilize the package to interact with the available models and providers.

### Example: Basic Usage

```typescript
import { modelHub, ModelHub, modelData } from 'ai-model-hub';

// Get a list of all available providers
const allProviders = modelHub.getAllProviderNames();
console.log('Available providers:', allProviders);

// Get details of a specific provider (case-insensitive)
const providerInfo = modelHub.getProviderInfo('provider_name');
console.log('Provider Info:', providerInfo);

// Get a list of all model names
const allModelNames = modelHub.getAllModelNames();
console.log('All model names:', allModelNames);

// Get model information by model name
const modelInfo = modelHub.getModelInfo('model_name');
console.log('Model Info:', modelInfo);

// Get model pricing information
const modelPrice = modelHub.getModelPrice('model_name');
console.log('Model Price:', modelPrice);

// Search for models using a keyword
const modelsWithKeyword = modelHub.getModelNamesByKeyword('keyword');
console.log('Models matching keyword:', modelsWithKeyword);
```

### Working with `modelData` (JSON Data)

`modelData` contains the raw JSON data of all AI models and providers. You can use it directly if you need access to the underlying data structure.

```typescript
import { modelData } from 'ai-model-hub';

// Access the raw JSON data
console.log('Raw model data:', modelData);

// Example: Iterate over all providers
modelData.forEach((provider) => {
  console.log(`Provider: ${provider.provider}, Models: ${provider.models_list.length}`);
});
```

## Available Methods in `ModelHub`

1. **`getModelList()`**  
   Retrieves the full list of providers.

   ```typescript
   const providerList = modelHub.getModelList();
   ```

2. **`getAllProviderNames()`**  
   Returns an array of all provider names.

   ```typescript
   const providerNames = modelHub.getAllProviderNames();
   ```

3. **`getAllModelNames()`**  
   Gets a flat array of all model names across providers.

   ```typescript
   const modelNames = modelHub.getAllModelNames();
   ```

4. **`getAllModelNamesGroupByProvider()`**  
   Retrieves all model names grouped by their provider.

   ```typescript
   const groupedModels = modelHub.getAllModelNamesGroupByProvider();
   ```

5. **`getProviderInfo(providerName: string)`**  
   Fetches detailed information about a specific provider (case-insensitive).

   ```typescript
   const providerInfo = modelHub.getProviderInfo('provider_name');
   ```

6. **`getAllModelNamesByProvider(providerName: string)`**  
   Gets the names of all models from a specific provider.

   ```typescript
   const modelsByProvider = modelHub.getAllModelNamesByProvider('provider_name');
   ```

7. **`getModelInfo(modelName: string)`**  
   Retrieves detailed information for a specific model by name.

   ```typescript
   const modelInfo = modelHub.getModelInfo('model_name');
   ```

8. **`getModelPrice(modelName: string)`**  
   Fetches the pricing information of a specific model.

   ```typescript
   const price = modelHub.getModelPrice('model_name');
   ```

9. **`getModelNamesByKeyword(keyword: string)`**  
   Searches models by a keyword and returns a list of matching model names.

   ```typescript
   const matchingModels = modelHub.getModelNamesByKeyword('keyword');
   ```

## License

This project is licensed under the **CC-BY-NC-ND-4.0 License**.  
You are free to share the work under the following terms:

- **Attribution**: You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial**: You may not use the material for commercial purposes.
- **NoDerivatives**: If you remix, transform, or build upon the material, you may not distribute the modified material.
- **No additional restrictions**: You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

For more details, please see the [official license text](https://creativecommons.org/licenses/by-nc-nd/4.0/).

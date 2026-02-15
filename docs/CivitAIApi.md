# CivitAIApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getModelApiCivitaiModelModelIdGet**](CivitAIApi.md#getmodelapicivitaimodelmodelidget) | **GET** /api/civitai/model/{model_id} | Get Model |



## getModelApiCivitaiModelModelIdGet

> any getModelApiCivitaiModelModelIdGet(modelId)

Get Model

Get model details from CivitAI and cache to database.

### Example

```ts
import {
  Configuration,
  CivitAIApi,
} from 'tensors-client';
import type { GetModelApiCivitaiModelModelIdGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new CivitAIApi(config);

  const body = {
    // number
    modelId: 56,
  } satisfies GetModelApiCivitaiModelModelIdGetRequest;

  try {
    const data = await api.getModelApiCivitaiModelModelIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **modelId** | `number` |  | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


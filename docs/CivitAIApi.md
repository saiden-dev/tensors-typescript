# CivitAIApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getModelApiCivitaiModelModelIdGet**](CivitAIApi.md#getmodelapicivitaimodelmodelidget) | **GET** /api/civitai/model/{model_id} | Get Model |
| [**searchModelsApiCivitaiSearchGet**](CivitAIApi.md#searchmodelsapicivitaisearchget) | **GET** /api/civitai/search | Search Models |



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


## searchModelsApiCivitaiSearchGet

> any searchModelsApiCivitaiSearchGet(query, types, baseModels, sort, limit, period, tag, username, page, nsfw, sfw, commercial)

Search Models

Search CivitAI models.  Supports all CivitAI search parameters including filters for type, base model, time period, tags, creator, NSFW level, and commercial use.

### Example

```ts
import {
  Configuration,
  CivitAIApi,
} from 'tensors-client';
import type { SearchModelsApiCivitaiSearchGetRequest } from 'tensors-client';

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
    // string | Search query (optional)
    query: query_example,
    // string | Model type (Checkpoint, LORA, etc.) (optional)
    types: types_example,
    // string | Base model (optional)
    baseModels: baseModels_example,
    // TensorsServerCivitaiRoutesSortOrder | Sort order (optional)
    sort: ...,
    // number | Max results (default: 25) (optional)
    limit: 5,
    // Period | Time period filter (optional)
    period: ...,
    // string | Filter by tag (optional)
    tag: tag_example,
    // string | Filter by creator username (optional)
    username: username_example,
    // number | Page number (optional)
    page: 56,
    // NsfwLevel | NSFW filter level (optional)
    nsfw: ...,
    // boolean | Exclude NSFW content (optional)
    sfw: true,
    // CommercialUse | Commercial use filter (optional)
    commercial: ...,
  } satisfies SearchModelsApiCivitaiSearchGetRequest;

  try {
    const data = await api.searchModelsApiCivitaiSearchGet(body);
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
| **query** | `string` | Search query | [Optional] [Defaults to `undefined`] |
| **types** | `string` | Model type (Checkpoint, LORA, etc.) | [Optional] [Defaults to `undefined`] |
| **baseModels** | `string` | Base model | [Optional] [Defaults to `undefined`] |
| **sort** | `TensorsServerCivitaiRoutesSortOrder` | Sort order | [Optional] [Defaults to `undefined`] [Enum: Most Downloaded, Highest Rated, Newest] |
| **limit** | `number` | Max results (default: 25) | [Optional] [Defaults to `undefined`] |
| **period** | `Period` | Time period filter | [Optional] [Defaults to `undefined`] [Enum: AllTime, Year, Month, Week, Day] |
| **tag** | `string` | Filter by tag | [Optional] [Defaults to `undefined`] |
| **username** | `string` | Filter by creator username | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `undefined`] |
| **nsfw** | `NsfwLevel` | NSFW filter level | [Optional] [Defaults to `undefined`] [Enum: None, Soft, Mature, X] |
| **sfw** | `boolean` | Exclude NSFW content | [Optional] [Defaults to `false`] |
| **commercial** | `CommercialUse` | Commercial use filter | [Optional] [Defaults to `undefined`] [Enum: None, Image, Rent, Sell] |

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


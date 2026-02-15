# SearchApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**searchModelsApiSearchGet**](SearchApi.md#searchmodelsapisearchget) | **GET** /api/search | Search Models |



## searchModelsApiSearchGet

> { [key: string]: any; } searchModelsApiSearchGet(query, provider, types, baseModels, period, nsfw, sfw, commercial, page, pipeline, sort, limit, tag, author)

Search Models

Search models across CivitAI and/or Hugging Face.  Returns results from selected provider(s). When provider&#x3D;all, returns results from both CivitAI and Hugging Face in separate keys.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'tensors-client';
import type { SearchModelsApiSearchGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new SearchApi(config);

  const body = {
    // string | Search query (optional)
    query: query_example,
    // Provider | Search provider (civitai, hf, or all) (optional)
    provider: ...,
    // string | Model type - CivitAI (Checkpoint, LORA, etc.) (optional)
    types: types_example,
    // string | Base model - CivitAI (optional)
    baseModels: baseModels_example,
    // string | Time period - CivitAI (AllTime, Year, Month, Week, Day) (optional)
    period: period_example,
    // string | NSFW level - CivitAI (None, Soft, Mature, X) (optional)
    nsfw: nsfw_example,
    // boolean | Exclude NSFW - CivitAI (optional)
    sfw: true,
    // string | Commercial use - CivitAI (None, Image, Rent, Sell) (optional)
    commercial: commercial_example,
    // number | Page number - CivitAI (optional)
    page: 56,
    // string | Pipeline tag - HuggingFace (text-to-image, etc.) (optional)
    pipeline: pipeline_example,
    // SortOrder | Sort order (optional)
    sort: ...,
    // number | Max results per provider (optional)
    limit: 56,
    // string | Filter by tag (optional)
    tag: tag_example,
    // string | Filter by author/creator (optional)
    author: author_example,
  } satisfies SearchModelsApiSearchGetRequest;

  try {
    const data = await api.searchModelsApiSearchGet(body);
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
| **provider** | `Provider` | Search provider (civitai, hf, or all) | [Optional] [Defaults to `undefined`] [Enum: civitai, hf, all] |
| **types** | `string` | Model type - CivitAI (Checkpoint, LORA, etc.) | [Optional] [Defaults to `undefined`] |
| **baseModels** | `string` | Base model - CivitAI | [Optional] [Defaults to `undefined`] |
| **period** | `string` | Time period - CivitAI (AllTime, Year, Month, Week, Day) | [Optional] [Defaults to `undefined`] |
| **nsfw** | `string` | NSFW level - CivitAI (None, Soft, Mature, X) | [Optional] [Defaults to `undefined`] |
| **sfw** | `boolean` | Exclude NSFW - CivitAI | [Optional] [Defaults to `false`] |
| **commercial** | `string` | Commercial use - CivitAI (None, Image, Rent, Sell) | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number - CivitAI | [Optional] [Defaults to `undefined`] |
| **pipeline** | `string` | Pipeline tag - HuggingFace (text-to-image, etc.) | [Optional] [Defaults to `undefined`] |
| **sort** | `SortOrder` | Sort order | [Optional] [Defaults to `undefined`] [Enum: downloads, rating, newest] |
| **limit** | `number` | Max results per provider | [Optional] [Defaults to `25`] |
| **tag** | `string` | Filter by tag | [Optional] [Defaults to `undefined`] |
| **author** | `string` | Filter by author/creator | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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


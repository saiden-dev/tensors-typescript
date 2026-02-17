# ComfyUIAPIApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**comfyuiClearQueueApiComfyuiQueueDelete**](ComfyUIAPIApi.md#comfyuiclearqueueapicomfyuiqueuedelete) | **DELETE** /api/comfyui/queue | Comfyui Clear Queue |
| [**comfyuiGenerateApiComfyuiGeneratePost**](ComfyUIAPIApi.md#comfyuigenerateapicomfyuigeneratepost) | **POST** /api/comfyui/generate | Comfyui Generate |
| [**comfyuiHistoryDetailApiComfyuiHistoryPromptIdGet**](ComfyUIAPIApi.md#comfyuihistorydetailapicomfyuihistorypromptidget) | **GET** /api/comfyui/history/{prompt_id} | Comfyui History Detail |
| [**comfyuiHistoryListApiComfyuiHistoryGet**](ComfyUIAPIApi.md#comfyuihistorylistapicomfyuihistoryget) | **GET** /api/comfyui/history | Comfyui History List |
| [**comfyuiModelsApiComfyuiModelsGet**](ComfyUIAPIApi.md#comfyuimodelsapicomfyuimodelsget) | **GET** /api/comfyui/models | Comfyui Models |
| [**comfyuiQueueApiComfyuiQueueGet**](ComfyUIAPIApi.md#comfyuiqueueapicomfyuiqueueget) | **GET** /api/comfyui/queue | Comfyui Queue |
| [**comfyuiStatusApiComfyuiStatusGet**](ComfyUIAPIApi.md#comfyuistatusapicomfyuistatusget) | **GET** /api/comfyui/status | Comfyui Status |
| [**comfyuiWorkflowApiComfyuiWorkflowPost**](ComfyUIAPIApi.md#comfyuiworkflowapicomfyuiworkflowpost) | **POST** /api/comfyui/workflow | Comfyui Workflow |



## comfyuiClearQueueApiComfyuiQueueDelete

> { [key: string]: any; } comfyuiClearQueueApiComfyuiQueueDelete()

Comfyui Clear Queue

Clear the ComfyUI queue.

### Example

```ts
import {
  Configuration,
  ComfyUIAPIApi,
} from 'tensors-client';
import type { ComfyuiClearQueueApiComfyuiQueueDeleteRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new ComfyUIAPIApi(config);

  try {
    const data = await api.comfyuiClearQueueApiComfyuiQueueDelete();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## comfyuiGenerateApiComfyuiGeneratePost

> GenerateResponse comfyuiGenerateApiComfyuiGeneratePost(generateRequest)

Comfyui Generate

Generate an image using a simple text-to-image workflow.  This uses the built-in SDXL/Flux compatible workflow template. For custom workflows, use the /workflow endpoint instead.

### Example

```ts
import {
  Configuration,
  ComfyUIAPIApi,
} from 'tensors-client';
import type { ComfyuiGenerateApiComfyuiGeneratePostRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new ComfyUIAPIApi(config);

  const body = {
    // GenerateRequest
    generateRequest: ...,
  } satisfies ComfyuiGenerateApiComfyuiGeneratePostRequest;

  try {
    const data = await api.comfyuiGenerateApiComfyuiGeneratePost(body);
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
| **generateRequest** | [GenerateRequest](GenerateRequest.md) |  | |

### Return type

[**GenerateResponse**](GenerateResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## comfyuiHistoryDetailApiComfyuiHistoryPromptIdGet

> { [key: string]: any; } comfyuiHistoryDetailApiComfyuiHistoryPromptIdGet(promptId)

Comfyui History Detail

Get details for a specific history entry.

### Example

```ts
import {
  Configuration,
  ComfyUIAPIApi,
} from 'tensors-client';
import type { ComfyuiHistoryDetailApiComfyuiHistoryPromptIdGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new ComfyUIAPIApi(config);

  const body = {
    // string
    promptId: promptId_example,
  } satisfies ComfyuiHistoryDetailApiComfyuiHistoryPromptIdGetRequest;

  try {
    const data = await api.comfyuiHistoryDetailApiComfyuiHistoryPromptIdGet(body);
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
| **promptId** | `string` |  | [Defaults to `undefined`] |

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


## comfyuiHistoryListApiComfyuiHistoryGet

> { [key: string]: any; } comfyuiHistoryListApiComfyuiHistoryGet(limit)

Comfyui History List

List ComfyUI generation history.

### Example

```ts
import {
  Configuration,
  ComfyUIAPIApi,
} from 'tensors-client';
import type { ComfyuiHistoryListApiComfyuiHistoryGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new ComfyUIAPIApi(config);

  const body = {
    // number | Max history items (optional)
    limit: 56,
  } satisfies ComfyuiHistoryListApiComfyuiHistoryGetRequest;

  try {
    const data = await api.comfyuiHistoryListApiComfyuiHistoryGet(body);
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
| **limit** | `number` | Max history items | [Optional] [Defaults to `20`] |

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


## comfyuiModelsApiComfyuiModelsGet

> ModelsResponse comfyuiModelsApiComfyuiModelsGet()

Comfyui Models

List available models in ComfyUI.

### Example

```ts
import {
  Configuration,
  ComfyUIAPIApi,
} from 'tensors-client';
import type { ComfyuiModelsApiComfyuiModelsGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new ComfyUIAPIApi(config);

  try {
    const data = await api.comfyuiModelsApiComfyuiModelsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelsResponse**](ModelsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## comfyuiQueueApiComfyuiQueueGet

> QueueStatusResponse comfyuiQueueApiComfyuiQueueGet()

Comfyui Queue

Get ComfyUI queue status.

### Example

```ts
import {
  Configuration,
  ComfyUIAPIApi,
} from 'tensors-client';
import type { ComfyuiQueueApiComfyuiQueueGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new ComfyUIAPIApi(config);

  try {
    const data = await api.comfyuiQueueApiComfyuiQueueGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**QueueStatusResponse**](QueueStatusResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## comfyuiStatusApiComfyuiStatusGet

> SystemStatsResponse comfyuiStatusApiComfyuiStatusGet()

Comfyui Status

Get ComfyUI system stats (GPU, RAM, etc.).

### Example

```ts
import {
  Configuration,
  ComfyUIAPIApi,
} from 'tensors-client';
import type { ComfyuiStatusApiComfyuiStatusGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new ComfyUIAPIApi(config);

  try {
    const data = await api.comfyuiStatusApiComfyuiStatusGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SystemStatsResponse**](SystemStatsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## comfyuiWorkflowApiComfyuiWorkflowPost

> WorkflowResponse comfyuiWorkflowApiComfyuiWorkflowPost(workflowRequest)

Comfyui Workflow

Queue an arbitrary ComfyUI workflow for execution.  The workflow should be in ComfyUI API format (exported via \&quot;Save (API Format)\&quot;). This endpoint queues the workflow and returns immediately with the prompt_id. Use /history/{prompt_id} to check the result.

### Example

```ts
import {
  Configuration,
  ComfyUIAPIApi,
} from 'tensors-client';
import type { ComfyuiWorkflowApiComfyuiWorkflowPostRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new ComfyUIAPIApi(config);

  const body = {
    // WorkflowRequest
    workflowRequest: ...,
  } satisfies ComfyuiWorkflowApiComfyuiWorkflowPostRequest;

  try {
    const data = await api.comfyuiWorkflowApiComfyuiWorkflowPost(body);
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
| **workflowRequest** | [WorkflowRequest](WorkflowRequest.md) |  | |

### Return type

[**WorkflowResponse**](WorkflowResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


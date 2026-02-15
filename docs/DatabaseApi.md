# DatabaseApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cacheModelApiDbCachePost**](DatabaseApi.md#cachemodelapidbcachepost) | **POST** /api/db/cache | Cache Model |
| [**getFileApiDbFilesFileIdGet**](DatabaseApi.md#getfileapidbfilesfileidget) | **GET** /api/db/files/{file_id} | Get File |
| [**getModelApiDbModelsCivitaiIdGet**](DatabaseApi.md#getmodelapidbmodelscivitaiidget) | **GET** /api/db/models/{civitai_id} | Get Model |
| [**getStatsApiDbStatsGet**](DatabaseApi.md#getstatsapidbstatsget) | **GET** /api/db/stats | Get Stats |
| [**getTriggersByPathApiDbTriggersGet**](DatabaseApi.md#gettriggersbypathapidbtriggersget) | **GET** /api/db/triggers | Get Triggers By Path |
| [**getTriggersByVersionApiDbTriggersVersionIdGet**](DatabaseApi.md#gettriggersbyversionapidbtriggersversionidget) | **GET** /api/db/triggers/{version_id} | Get Triggers By Version |
| [**linkFilesApiDbLinkPost**](DatabaseApi.md#linkfilesapidblinkpost) | **POST** /api/db/link | Link Files |
| [**listFilesApiDbFilesGet**](DatabaseApi.md#listfilesapidbfilesget) | **GET** /api/db/files | List Files |
| [**scanDirectoryApiDbScanPost**](DatabaseApi.md#scandirectoryapidbscanpost) | **POST** /api/db/scan | Scan Directory |
| [**searchModelsApiDbModelsGet**](DatabaseApi.md#searchmodelsapidbmodelsget) | **GET** /api/db/models | Search Models |



## cacheModelApiDbCachePost

> { [key: string]: any; } cacheModelApiDbCachePost(cacheRequest)

Cache Model

Fetch and cache full CivitAI model data.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { CacheModelApiDbCachePostRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  const body = {
    // CacheRequest
    cacheRequest: ...,
  } satisfies CacheModelApiDbCachePostRequest;

  try {
    const data = await api.cacheModelApiDbCachePost(body);
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
| **cacheRequest** | [CacheRequest](CacheRequest.md) |  | |

### Return type

**{ [key: string]: any; }**

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


## getFileApiDbFilesFileIdGet

> { [key: string]: any; } getFileApiDbFilesFileIdGet(fileId)

Get File

Get local file by ID.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { GetFileApiDbFilesFileIdGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  const body = {
    // number
    fileId: 56,
  } satisfies GetFileApiDbFilesFileIdGetRequest;

  try {
    const data = await api.getFileApiDbFilesFileIdGet(body);
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
| **fileId** | `number` |  | [Defaults to `undefined`] |

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


## getModelApiDbModelsCivitaiIdGet

> { [key: string]: any; } getModelApiDbModelsCivitaiIdGet(civitaiId)

Get Model

Get cached model by CivitAI ID.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { GetModelApiDbModelsCivitaiIdGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  const body = {
    // number
    civitaiId: 56,
  } satisfies GetModelApiDbModelsCivitaiIdGetRequest;

  try {
    const data = await api.getModelApiDbModelsCivitaiIdGet(body);
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
| **civitaiId** | `number` |  | [Defaults to `undefined`] |

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


## getStatsApiDbStatsGet

> { [key: string]: any; } getStatsApiDbStatsGet()

Get Stats

Get database statistics.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { GetStatsApiDbStatsGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  try {
    const data = await api.getStatsApiDbStatsGet();
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


## getTriggersByPathApiDbTriggersGet

> Array&lt;string | null&gt; getTriggersByPathApiDbTriggersGet(filePath)

Get Triggers By Path

Get trigger words for a local file by path.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { GetTriggersByPathApiDbTriggersGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  const body = {
    // string | Path to safetensor file
    filePath: filePath_example,
  } satisfies GetTriggersByPathApiDbTriggersGetRequest;

  try {
    const data = await api.getTriggersByPathApiDbTriggersGet(body);
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
| **filePath** | `string` | Path to safetensor file | [Defaults to `undefined`] |

### Return type

**Array<string | null>**

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


## getTriggersByVersionApiDbTriggersVersionIdGet

> Array&lt;string | null&gt; getTriggersByVersionApiDbTriggersVersionIdGet(versionId)

Get Triggers By Version

Get trigger words for a version by CivitAI version ID.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { GetTriggersByVersionApiDbTriggersVersionIdGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  const body = {
    // number
    versionId: 56,
  } satisfies GetTriggersByVersionApiDbTriggersVersionIdGetRequest;

  try {
    const data = await api.getTriggersByVersionApiDbTriggersVersionIdGet(body);
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
| **versionId** | `number` |  | [Defaults to `undefined`] |

### Return type

**Array<string | null>**

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


## linkFilesApiDbLinkPost

> { [key: string]: any; } linkFilesApiDbLinkPost()

Link Files

Link unlinked local files to CivitAI by hash lookup.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { LinkFilesApiDbLinkPostRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  try {
    const data = await api.linkFilesApiDbLinkPost();
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


## listFilesApiDbFilesGet

> Array&lt;{ [key: string]: any; }&gt; listFilesApiDbFilesGet()

List Files

List all local files with CivitAI info.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { ListFilesApiDbFilesGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  try {
    const data = await api.listFilesApiDbFilesGet();
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

**Array<{ [key: string]: any; }>**

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


## scanDirectoryApiDbScanPost

> { [key: string]: any; } scanDirectoryApiDbScanPost(scanRequest)

Scan Directory

Scan directory for safetensor files and add to database.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { ScanDirectoryApiDbScanPostRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  const body = {
    // ScanRequest
    scanRequest: ...,
  } satisfies ScanDirectoryApiDbScanPostRequest;

  try {
    const data = await api.scanDirectoryApiDbScanPost(body);
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
| **scanRequest** | [ScanRequest](ScanRequest.md) |  | |

### Return type

**{ [key: string]: any; }**

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


## searchModelsApiDbModelsGet

> Array&lt;{ [key: string]: any; }&gt; searchModelsApiDbModelsGet(query, type, base, limit)

Search Models

Search cached models offline.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'tensors-client';
import type { SearchModelsApiDbModelsGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DatabaseApi(config);

  const body = {
    // string | Search query (optional)
    query: query_example,
    // string | Model type filter (optional)
    type: type_example,
    // string | Base model filter (optional)
    base: base_example,
    // number | Max results (optional)
    limit: 56,
  } satisfies SearchModelsApiDbModelsGetRequest;

  try {
    const data = await api.searchModelsApiDbModelsGet(body);
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
| **type** | `string` | Model type filter | [Optional] [Defaults to `undefined`] |
| **base** | `string` | Base model filter | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max results | [Optional] [Defaults to `20`] |

### Return type

**Array<{ [key: string]: any; }>**

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


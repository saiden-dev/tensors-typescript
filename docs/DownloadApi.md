# DownloadApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDownloadStatusApiDownloadStatusDownloadIdGet**](DownloadApi.md#getdownloadstatusapidownloadstatusdownloadidget) | **GET** /api/download/status/{download_id} | Get Download Status |
| [**listActiveDownloadsApiDownloadActiveGet**](DownloadApi.md#listactivedownloadsapidownloadactiveget) | **GET** /api/download/active | List Active Downloads |
| [**startDownloadApiDownloadPost**](DownloadApi.md#startdownloadapidownloadpost) | **POST** /api/download | Start Download |



## getDownloadStatusApiDownloadStatusDownloadIdGet

> { [key: string]: any; } getDownloadStatusApiDownloadStatusDownloadIdGet(downloadId)

Get Download Status

Get status of a download.

### Example

```ts
import {
  Configuration,
  DownloadApi,
} from 'tensors-client';
import type { GetDownloadStatusApiDownloadStatusDownloadIdGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DownloadApi(config);

  const body = {
    // string
    downloadId: downloadId_example,
  } satisfies GetDownloadStatusApiDownloadStatusDownloadIdGetRequest;

  try {
    const data = await api.getDownloadStatusApiDownloadStatusDownloadIdGet(body);
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
| **downloadId** | `string` |  | [Defaults to `undefined`] |

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


## listActiveDownloadsApiDownloadActiveGet

> { [key: string]: any; } listActiveDownloadsApiDownloadActiveGet()

List Active Downloads

List all active/recent downloads.

### Example

```ts
import {
  Configuration,
  DownloadApi,
} from 'tensors-client';
import type { ListActiveDownloadsApiDownloadActiveGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DownloadApi(config);

  try {
    const data = await api.listActiveDownloadsApiDownloadActiveGet();
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


## startDownloadApiDownloadPost

> { [key: string]: any; } startDownloadApiDownloadPost(downloadRequest)

Start Download

Start a model download (async with progress tracking).

### Example

```ts
import {
  Configuration,
  DownloadApi,
} from 'tensors-client';
import type { StartDownloadApiDownloadPostRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new DownloadApi(config);

  const body = {
    // DownloadRequest
    downloadRequest: ...,
  } satisfies StartDownloadApiDownloadPostRequest;

  try {
    const data = await api.startDownloadApiDownloadPost(body);
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
| **downloadRequest** | [DownloadRequest](DownloadRequest.md) |  | |

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


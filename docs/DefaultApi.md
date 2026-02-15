# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**statusStatusGet**](DefaultApi.md#statusstatusget) | **GET** /status | Status |



## statusStatusGet

> { [key: string]: string; } statusStatusGet()

Status

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'tensors-client';
import type { StatusStatusGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.statusStatusGet();
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

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


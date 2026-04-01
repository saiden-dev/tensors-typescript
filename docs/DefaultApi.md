# DefaultApi

All URIs are relative to _http://localhost_

| Method                                               | HTTP request    | Description |
| ---------------------------------------------------- | --------------- | ----------- |
| [**statusStatusGet**](DefaultApi.md#statusstatusget) | **GET** /status | Status      |

## statusStatusGet

> { [key: string]: string; } statusStatusGet()

Status

### Example

```ts
import { Configuration, DefaultApi } from '@saiden/tensors'
import type { StatusStatusGetRequest } from '@saiden/tensors'

async function example() {
  console.log('🚀 Testing @saiden/tensors SDK...')
  const api = new DefaultApi()

  try {
    const data = await api.statusStatusGet()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

// Run the test
example().catch(console.error)
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

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Successful Response | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

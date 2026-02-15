# GalleryApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteImageApiImagesImageIdDelete**](GalleryApi.md#deleteimageapiimagesimageiddelete) | **DELETE** /api/images/{image_id} | Delete Image |
| [**editImageMetadataApiImagesImageIdEditPost**](GalleryApi.md#editimagemetadataapiimagesimageideditpost) | **POST** /api/images/{image_id}/edit | Edit Image Metadata |
| [**galleryStatsApiImagesStatsSummaryGet**](GalleryApi.md#gallerystatsapiimagesstatssummaryget) | **GET** /api/images/stats/summary | Gallery Stats |
| [**getImageApiImagesImageIdGet**](GalleryApi.md#getimageapiimagesimageidget) | **GET** /api/images/{image_id} | Get Image |
| [**getImageMetadataApiImagesImageIdMetaGet**](GalleryApi.md#getimagemetadataapiimagesimageidmetaget) | **GET** /api/images/{image_id}/meta | Get Image Metadata |
| [**listImagesApiImagesGet**](GalleryApi.md#listimagesapiimagesget) | **GET** /api/images | List Images |



## deleteImageApiImagesImageIdDelete

> { [key: string]: any; } deleteImageApiImagesImageIdDelete(imageId)

Delete Image

Delete an image and its metadata.

### Example

```ts
import {
  Configuration,
  GalleryApi,
} from 'tensors-client';
import type { DeleteImageApiImagesImageIdDeleteRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new GalleryApi(config);

  const body = {
    // string
    imageId: imageId_example,
  } satisfies DeleteImageApiImagesImageIdDeleteRequest;

  try {
    const data = await api.deleteImageApiImagesImageIdDelete(body);
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
| **imageId** | `string` |  | [Defaults to `undefined`] |

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


## editImageMetadataApiImagesImageIdEditPost

> { [key: string]: any; } editImageMetadataApiImagesImageIdEditPost(imageId, metadataUpdate)

Edit Image Metadata

Update metadata for an image.

### Example

```ts
import {
  Configuration,
  GalleryApi,
} from 'tensors-client';
import type { EditImageMetadataApiImagesImageIdEditPostRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new GalleryApi(config);

  const body = {
    // string
    imageId: imageId_example,
    // MetadataUpdate
    metadataUpdate: ...,
  } satisfies EditImageMetadataApiImagesImageIdEditPostRequest;

  try {
    const data = await api.editImageMetadataApiImagesImageIdEditPost(body);
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
| **imageId** | `string` |  | [Defaults to `undefined`] |
| **metadataUpdate** | [MetadataUpdate](MetadataUpdate.md) |  | |

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


## galleryStatsApiImagesStatsSummaryGet

> { [key: string]: any; } galleryStatsApiImagesStatsSummaryGet()

Gallery Stats

Get gallery statistics.

### Example

```ts
import {
  Configuration,
  GalleryApi,
} from 'tensors-client';
import type { GalleryStatsApiImagesStatsSummaryGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new GalleryApi(config);

  try {
    const data = await api.galleryStatsApiImagesStatsSummaryGet();
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


## getImageApiImagesImageIdGet

> any getImageApiImagesImageIdGet(imageId)

Get Image

Get an image file by ID.

### Example

```ts
import {
  Configuration,
  GalleryApi,
} from 'tensors-client';
import type { GetImageApiImagesImageIdGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new GalleryApi(config);

  const body = {
    // string
    imageId: imageId_example,
  } satisfies GetImageApiImagesImageIdGetRequest;

  try {
    const data = await api.getImageApiImagesImageIdGet(body);
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
| **imageId** | `string` |  | [Defaults to `undefined`] |

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


## getImageMetadataApiImagesImageIdMetaGet

> { [key: string]: any; } getImageMetadataApiImagesImageIdMetaGet(imageId)

Get Image Metadata

Get metadata for an image.

### Example

```ts
import {
  Configuration,
  GalleryApi,
} from 'tensors-client';
import type { GetImageMetadataApiImagesImageIdMetaGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new GalleryApi(config);

  const body = {
    // string
    imageId: imageId_example,
  } satisfies GetImageMetadataApiImagesImageIdMetaGetRequest;

  try {
    const data = await api.getImageMetadataApiImagesImageIdMetaGet(body);
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
| **imageId** | `string` |  | [Defaults to `undefined`] |

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


## listImagesApiImagesGet

> { [key: string]: any; } listImagesApiImagesGet(limit, offset, newestFirst)

List Images

List images in the gallery, paginated.

### Example

```ts
import {
  Configuration,
  GalleryApi,
} from 'tensors-client';
import type { ListImagesApiImagesGetRequest } from 'tensors-client';

async function example() {
  console.log("🚀 Testing tensors-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: APIKeyHeader
    apiKey: "YOUR API KEY",
    // To configure API key authorization: APIKeyQuery
    apiKey: "YOUR API KEY",
  });
  const api = new GalleryApi(config);

  const body = {
    // number | Max images to return (optional)
    limit: 56,
    // number | Offset for pagination (optional)
    offset: 56,
    // boolean | Sort newest first (optional)
    newestFirst: true,
  } satisfies ListImagesApiImagesGetRequest;

  try {
    const data = await api.listImagesApiImagesGet(body);
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
| **limit** | `number` | Max images to return | [Optional] [Defaults to `50`] |
| **offset** | `number` | Offset for pagination | [Optional] [Defaults to `0`] |
| **newestFirst** | `boolean` | Sort newest first | [Optional] [Defaults to `true`] |

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


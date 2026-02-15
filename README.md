# tensors-client@0.1.18

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install tensors-client --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*CivitAIApi* | [**getModelApiCivitaiModelModelIdGet**](docs/CivitAIApi.md#getmodelapicivitaimodelmodelidget) | **GET** /api/civitai/model/{model_id} | Get Model
*CivitAIApi* | [**searchModelsApiCivitaiSearchGet**](docs/CivitAIApi.md#searchmodelsapicivitaisearchget) | **GET** /api/civitai/search | Search Models
*DatabaseApi* | [**cacheModelApiDbCachePost**](docs/DatabaseApi.md#cachemodelapidbcachepost) | **POST** /api/db/cache | Cache Model
*DatabaseApi* | [**getFileApiDbFilesFileIdGet**](docs/DatabaseApi.md#getfileapidbfilesfileidget) | **GET** /api/db/files/{file_id} | Get File
*DatabaseApi* | [**getModelApiDbModelsCivitaiIdGet**](docs/DatabaseApi.md#getmodelapidbmodelscivitaiidget) | **GET** /api/db/models/{civitai_id} | Get Model
*DatabaseApi* | [**getStatsApiDbStatsGet**](docs/DatabaseApi.md#getstatsapidbstatsget) | **GET** /api/db/stats | Get Stats
*DatabaseApi* | [**getTriggersByPathApiDbTriggersGet**](docs/DatabaseApi.md#gettriggersbypathapidbtriggersget) | **GET** /api/db/triggers | Get Triggers By Path
*DatabaseApi* | [**getTriggersByVersionApiDbTriggersVersionIdGet**](docs/DatabaseApi.md#gettriggersbyversionapidbtriggersversionidget) | **GET** /api/db/triggers/{version_id} | Get Triggers By Version
*DatabaseApi* | [**linkFilesApiDbLinkPost**](docs/DatabaseApi.md#linkfilesapidblinkpost) | **POST** /api/db/link | Link Files
*DatabaseApi* | [**listFilesApiDbFilesGet**](docs/DatabaseApi.md#listfilesapidbfilesget) | **GET** /api/db/files | List Files
*DatabaseApi* | [**scanDirectoryApiDbScanPost**](docs/DatabaseApi.md#scandirectoryapidbscanpost) | **POST** /api/db/scan | Scan Directory
*DatabaseApi* | [**searchModelsApiDbModelsGet**](docs/DatabaseApi.md#searchmodelsapidbmodelsget) | **GET** /api/db/models | Search Models
*DefaultApi* | [**statusStatusGet**](docs/DefaultApi.md#statusstatusget) | **GET** /status | Status
*DownloadApi* | [**getDownloadStatusApiDownloadStatusDownloadIdGet**](docs/DownloadApi.md#getdownloadstatusapidownloadstatusdownloadidget) | **GET** /api/download/status/{download_id} | Get Download Status
*DownloadApi* | [**listActiveDownloadsApiDownloadActiveGet**](docs/DownloadApi.md#listactivedownloadsapidownloadactiveget) | **GET** /api/download/active | List Active Downloads
*DownloadApi* | [**startDownloadApiDownloadPost**](docs/DownloadApi.md#startdownloadapidownloadpost) | **POST** /api/download | Start Download
*GalleryApi* | [**deleteImageApiImagesImageIdDelete**](docs/GalleryApi.md#deleteimageapiimagesimageiddelete) | **DELETE** /api/images/{image_id} | Delete Image
*GalleryApi* | [**editImageMetadataApiImagesImageIdEditPost**](docs/GalleryApi.md#editimagemetadataapiimagesimageideditpost) | **POST** /api/images/{image_id}/edit | Edit Image Metadata
*GalleryApi* | [**galleryStatsApiImagesStatsSummaryGet**](docs/GalleryApi.md#gallerystatsapiimagesstatssummaryget) | **GET** /api/images/stats/summary | Gallery Stats
*GalleryApi* | [**getImageApiImagesImageIdGet**](docs/GalleryApi.md#getimageapiimagesimageidget) | **GET** /api/images/{image_id} | Get Image
*GalleryApi* | [**getImageMetadataApiImagesImageIdMetaGet**](docs/GalleryApi.md#getimagemetadataapiimagesimageidmetaget) | **GET** /api/images/{image_id}/meta | Get Image Metadata
*GalleryApi* | [**listImagesApiImagesGet**](docs/GalleryApi.md#listimagesapiimagesget) | **GET** /api/images | List Images
*SearchApi* | [**searchModelsApiSearchGet**](docs/SearchApi.md#searchmodelsapisearchget) | **GET** /api/search | Search Models


### Models

- [CacheRequest](docs/CacheRequest.md)
- [CommercialUse](docs/CommercialUse.md)
- [DownloadRequest](docs/DownloadRequest.md)
- [HTTPValidationError](docs/HTTPValidationError.md)
- [LocationInner](docs/LocationInner.md)
- [MetadataUpdate](docs/MetadataUpdate.md)
- [NsfwLevel](docs/NsfwLevel.md)
- [Period](docs/Period.md)
- [Provider](docs/Provider.md)
- [ScanRequest](docs/ScanRequest.md)
- [TensorsServerCivitaiRoutesSortOrder](docs/TensorsServerCivitaiRoutesSortOrder.md)
- [TensorsServerSearchRoutesSortOrder](docs/TensorsServerSearchRoutesSortOrder.md)
- [ValidationError](docs/ValidationError.md)

### Authorization


Authentication schemes defined for the API:
<a id="APIKeyHeader"></a>
#### APIKeyHeader


- **Type**: API key
- **API key parameter name**: `X-API-Key`
- **Location**: HTTP header
<a id="APIKeyQuery"></a>
#### APIKeyQuery


- **Type**: API key
- **API key parameter name**: `api_key`
- **Location**: URL query string

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.1.18`
- Package version: `0.1.18`
- Generator version: `7.19.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()

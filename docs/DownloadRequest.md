
# DownloadRequest

Request body for downloading a model.

## Properties

Name | Type
------------ | -------------
`versionId` | number
`modelId` | number
`hash` | string
`outputDir` | string

## Example

```typescript
import type { DownloadRequest } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "versionId": null,
  "modelId": null,
  "hash": null,
  "outputDir": null,
} satisfies DownloadRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DownloadRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



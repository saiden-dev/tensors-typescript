
# CacheRequest

Request body for caching a model.

## Properties

Name | Type
------------ | -------------
`modelId` | number

## Example

```typescript
import type { CacheRequest } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "modelId": null,
} satisfies CacheRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CacheRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



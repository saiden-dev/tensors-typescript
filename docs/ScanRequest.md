
# ScanRequest

Request body for directory scan.

## Properties

Name | Type
------------ | -------------
`directory` | string

## Example

```typescript
import type { ScanRequest } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "directory": null,
} satisfies ScanRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScanRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



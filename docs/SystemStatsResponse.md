
# SystemStatsResponse

System stats response.

## Properties

Name | Type
------------ | -------------
`system` | { [key: string]: any; }
`devices` | Array&lt;{ [key: string]: any; }&gt;

## Example

```typescript
import type { SystemStatsResponse } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "system": null,
  "devices": null,
} satisfies SystemStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# MetadataUpdate

Request body for updating image metadata.

## Properties

Name | Type
------------ | -------------
`tags` | Array&lt;string&gt;
`notes` | string
`rating` | number
`favorite` | boolean

## Example

```typescript
import type { MetadataUpdate } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "tags": null,
  "notes": null,
  "rating": null,
  "favorite": null,
} satisfies MetadataUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MetadataUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# GenerateResponse

Response from text-to-image generation.

## Properties

Name | Type
------------ | -------------
`success` | boolean
`promptId` | string
`images` | Array&lt;string&gt;
`errors` | { [key: string]: any; }

## Example

```typescript
import type { GenerateResponse } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "promptId": null,
  "images": null,
  "errors": null,
} satisfies GenerateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



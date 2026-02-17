
# GenerateRequest

Request body for text-to-image generation.

## Properties

Name | Type
------------ | -------------
`prompt` | string
`negativePrompt` | string
`model` | string
`width` | number
`height` | number
`steps` | number
`cfg` | number
`seed` | number
`sampler` | string
`scheduler` | string

## Example

```typescript
import type { GenerateRequest } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "prompt": null,
  "negativePrompt": null,
  "model": null,
  "width": null,
  "height": null,
  "steps": null,
  "cfg": null,
  "seed": null,
  "sampler": null,
  "scheduler": null,
} satisfies GenerateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# ModelsResponse

Available models response.

## Properties

Name | Type
------------ | -------------
`checkpoints` | Array&lt;string&gt;
`loras` | Array&lt;string&gt;
`vae` | Array&lt;string&gt;
`clip` | Array&lt;string&gt;
`controlnet` | Array&lt;string&gt;
`upscaleModels` | Array&lt;string&gt;

## Example

```typescript
import type { ModelsResponse } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "checkpoints": null,
  "loras": null,
  "vae": null,
  "clip": null,
  "controlnet": null,
  "upscaleModels": null,
} satisfies ModelsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



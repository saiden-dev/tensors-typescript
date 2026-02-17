
# WorkflowResponse

Response from workflow execution.

## Properties

Name | Type
------------ | -------------
`success` | boolean
`promptId` | string
`number` | number
`error` | string
`nodeErrors` | { [key: string]: any; }

## Example

```typescript
import type { WorkflowResponse } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "promptId": null,
  "number": null,
  "error": null,
  "nodeErrors": null,
} satisfies WorkflowResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



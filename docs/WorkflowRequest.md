
# WorkflowRequest

Request body for running arbitrary workflow.

## Properties

Name | Type
------------ | -------------
`workflow` | { [key: string]: any; }

## Example

```typescript
import type { WorkflowRequest } from 'tensors-client'

// TODO: Update the object below with actual values
const example = {
  "workflow": null,
} satisfies WorkflowRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



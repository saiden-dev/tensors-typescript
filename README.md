# @saiden/tensors

TypeScript client for the [tensors](https://github.com/saiden-dev/tensors) API.

## Installation

```bash
npm install @saiden/tensors
```

## Usage

```typescript
import { Configuration, SearchApi, CivitAIApi, DatabaseApi } from '@saiden/tensors'

// Configure client (basePath defaults to https://tensors-api.saiden.dev)
const config = new Configuration({
  apiKey: process.env.TENSORS_API_KEY,
})

// Unified search across CivitAI and HuggingFace
const search = new SearchApi(config)
const results = await search.searchModelsApiSearchGet({
  query: 'flux lora',
  provider: 'all',  // 'civitai', 'hf', or 'all'
})

// CivitAI specific
const civitai = new CivitAIApi(config)
const models = await civitai.searchModelsApiCivitaiSearchGet({
  types: 'LORA',
  baseModels: 'Illustrious',
})

// Database
const db = new DatabaseApi(config)
const stats = await db.getStatsApiDbStatsGet()
```

## Available APIs

| API | Description |
|-----|-------------|
| `SearchApi` | Unified search (CivitAI + HuggingFace) |
| `CivitAIApi` | CivitAI model search and info |
| `DatabaseApi` | Local database operations |
| `DownloadApi` | Model downloads |
| `GalleryApi` | Image gallery management |

## Configuration

```typescript
const config = new Configuration({
  basePath: 'https://tensors-api.saiden.dev',  // default
  apiKey: 'your-api-key',             // X-API-Key header
})
```

## Links

- [tensors CLI](https://github.com/saiden-dev/tensors) - Python CLI and server
- [API Documentation](https://tensors-api.saiden.dev/docs) - OpenAPI docs

## License

MIT

/**
 * Example usage of the tensors-client
 */
import { Configuration, DatabaseApi, DownloadApi, GalleryApi, SearchApi } from './src'

// Configure the client
// Default basePath is https://tensors-api.saiden.dev (can be omitted)
const config = new Configuration({
  apiKey: 'YOUR_API_KEY', // Set TENSORS_API_KEY or replace with your key
})

// Create API instances
const search = new SearchApi(config)
const database = new DatabaseApi(config)
const gallery = new GalleryApi(config)
const download = new DownloadApi(config)

async function main() {
  // Search models
  console.log('=== Search Models ===')
  const searchResults = await search.searchModelsApiSearchGet({
    types: 'LORA',
    baseModels: 'Illustrious',
    tag: 'anime',
    limit: 5,
  })
  console.log('Found:', (searchResults as any).items?.length, 'models')
  ;(searchResults as any).items?.slice(0, 3).forEach((m: any) => {
    console.log(`  - ${m.id}: ${m.name}`)
  })

  // Get database stats
  console.log('\n=== Database Stats ===')
  const stats = await database.getStatsApiDbStatsGet()
  console.log('Models:', stats.models)
  console.log('Versions:', stats.model_versions)
  console.log('Local files:', stats.local_files)

  // List gallery images
  console.log('\n=== Gallery ===')
  const galleryStats = await gallery.galleryStatsApiImagesStatsSummaryGet()
  console.log('Total images:', galleryStats.total_images)
}

main().catch(console.error)

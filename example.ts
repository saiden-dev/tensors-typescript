/**
 * Example usage of the tensors-client
 */
import { CivitAIApi, Configuration, DatabaseApi, DownloadApi, GalleryApi } from './src'

// Configure the client
// Default basePath is https://tensors-api.saiden.dev (can be omitted)
const config = new Configuration({
  apiKey: process.env.TENSORS_API_KEY, // X-API-Key header
})

// Create API instances
const civitai = new CivitAIApi(config)
const database = new DatabaseApi(config)
const gallery = new GalleryApi(config)
const download = new DownloadApi(config)

async function main() {
  // Search CivitAI with extended params
  console.log('=== Search CivitAI ===')
  const searchResults = await civitai.searchModelsApiCivitaiSearchGet({
    types: 'LORA',
    baseModels: 'Illustrious',
    tag: 'anime',
    period: 'Week' as any, // Period enum
    limit: 5,
  })
  console.log('Found:', searchResults.items?.length, 'models (anime tag, this week)')
  searchResults.items?.slice(0, 3).forEach((m: any) => {
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

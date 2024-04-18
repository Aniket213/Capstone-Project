import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'
import schema from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'studio',

  projectId: 'efaeqs0i',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types,
  },
})

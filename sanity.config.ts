import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'
import { BespokeLogo } from './ui/BespokeLogo'

const devOnlyPlugins = [getStartedPlugin()]

const { theme } = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.sanity.build/api/hues?default=60929e&primary=d8172e&transparent=60929e&positive=43d675;300&caution=fbd024;200&lightest=fcfdfd&darkest=0d1415'
)) as { theme: import('sanity').StudioTheme }

export default defineConfig({
  name: 'default',
  title: 'Bespoke',
  studio: {
    components: {
      logo: BespokeLogo,
    },
  },

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET as string,

  plugins: [deskTool(), visionTool(), cloudinarySchemaPlugin(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
  theme,

})

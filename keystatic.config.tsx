import { config, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: {
	    owner: 'wahyusa',
	    name: 'sabar'
    },
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/_homepage',
      schema: {
        headline: fields.text({ label: 'Headline' }),
      },
    }),
  },
})
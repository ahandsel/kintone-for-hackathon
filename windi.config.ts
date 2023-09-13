import { resolve } from 'path'
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'

// extend the base config
export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    extract: {
      include: [
        resolve(__dirname, '**/*.{vue,ts}'),
      ],
    },
    shortcuts: {
      // custom the default background
      'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
    },
    // theme: {
    //   extend: {
    //     colors: {
    //       primary: {
    //         DEFAULT: "#008080",
    //         dark: "#038378",
    //         darker: "#076E65",
    //         darkest: "#065A53",
    //         light: "#10B5A7",
    //         lighter: "#0CCABA",
    //         lightest: "#06E5D2",
    //       },
    //     },
    //   },
    // },
  }),
)

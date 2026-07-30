import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type {} from 'vite-react-ssg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (/react-markdown|remark-gfm|rehype-slug|lowlight|highlight\.js|hast|mdast|unist|micromark|vfile|devlop/.test(id)) {
              return 'markdown'
            }
            if (/\/react\/|\/react-dom\/|\/react-router-dom\/|\/react-router\//.test(id)) {
              return 'vendor'
            }
          }
        },
      },
    },
  },
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'none',
    beastiesOptions: {
      preload: 'swap',
      pruneSource: false,
    },
  },
})

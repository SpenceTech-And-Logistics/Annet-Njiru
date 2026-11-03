import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPlugin from './seo-plugin.js'

export default defineConfig({ plugins: [react(), seoPlugin()] })

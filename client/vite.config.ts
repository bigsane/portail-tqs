import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error: s
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    server: {
        host: true,
        port: 3000,
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            // @ts-expect-error: s
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        },
    },
})

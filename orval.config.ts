import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: '../pocket-api/swagger.json',
    output: {
      baseUrl: 'http://localhost:3000',
      target: './src/http/generated/api.ts',
      client: 'react-query',
      httpClient: 'fetch',
      clean: true,
    },
  },
})

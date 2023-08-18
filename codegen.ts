import { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
  schema: 'http://127.0.0.1:3000/api/graphql',
  documents: ['src/**/*.tsx', '!src/graphql/**/*'],
  generates: {
    './src/graphql/': {
      preset: 'client',
      plugins: []
    }
  },
  watch: true
};

export default config;

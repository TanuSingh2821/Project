// eslint.config.ts
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import pluginImport from 'eslint-plugin-import'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),

  // 1️⃣ Add the import plugin
  {
    plugins: { import: pluginImport },
    settings: {
      'import/resolver': {
        // – TypeScript resolver so it picks up tsconfig paths + .svg types
        typescript: { alwaysTryTypes: true, project: './tsconfig.json' },
        // – Node resolver so it knows .svg is a valid extension
        node:      { extensions: ['.js','jsx','ts','tsx','svg'] },
      },
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
  },
])

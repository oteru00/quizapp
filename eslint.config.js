// eslint.config.js
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  // React の推奨設定（Flat Config）
  react.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // ← これだけにする（重複しない）
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // JSX で使っていれば「使用済み」として扱う
      'react/jsx-uses-vars': 'error',
      // React 17+ で必要ないので off（好みで可）
      'react/jsx-uses-react': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'off',
      'no-undef': 'error',
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
])
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Preact بدل React في الإنتاج: نفس الواجهة البرمجية (preact/compat) بحجم أقل بكثير،
// وهذا يهم على أجهزة ضعيفة حيث يكلّف تحليل JavaScript أكثر من الشبكة.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react/jsx-runtime': 'preact/jsx-runtime',
      'react/jsx-dev-runtime': 'preact/jsx-runtime',
      'react-dom/client': 'preact/compat/client',
      'react-dom': 'preact/compat',
      react: 'preact/compat',
    },
  },
  build: { target: 'es2019', cssCodeSplit: false, sourcemap: false },
  test: { environment: 'node', include: ['src/**/*.test.ts'] },
});

/// <reference types="vitest" />
/// <reference types="vite/client" />

// @ts-ignore
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    base: '',
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ReactSink',
            formats: ['es', 'umd'],
            fileName: (format) => `react-sink.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                },
            },
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: 'setup.tests.js',
        clearMocks: true,
        cache: false,
        coverage: {
            reporter: ['lcov'],
        },
        reporters: process.env.CI ? ['default', 'junit'] : 'default',
        outputFile: {
            junit: './test-results/unit/results.xml',
        },
    }
});

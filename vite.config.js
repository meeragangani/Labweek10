
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 50087,
        watch: {
            ignored: ['**/.vs/**', '**/node_modules/**']
        }
    }
});

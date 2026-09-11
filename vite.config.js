import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    base: '/bees-ai-pm-os/',
    plugins: [react(), tailwindcss()],
    build: { cssMinify: false },
});

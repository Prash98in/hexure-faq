import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
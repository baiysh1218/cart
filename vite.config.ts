import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    proxy: {},
  },
  plugins: [
    react(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    visualizer({
      open: true,
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  build: {
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  },
});

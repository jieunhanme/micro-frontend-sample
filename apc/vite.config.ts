import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "apc",
      filename: "remoteEntry.js",
      exposes: {
        "./Routes": "./src/routes",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
  },
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/@components" },
      { find: "@pages", replacement: "/src/@pages" },
    ],
  },
});
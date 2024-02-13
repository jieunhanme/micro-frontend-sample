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
      remotes: {
        portal: "http://localhost:3000/assets/remoteEntry.js",
      },
      exposes: {
        "./Routes": "./src/routes",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "jotai",
        "react-i18next",
        "i18next",
      ],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    rollupOptions: {
      external: ["portal/i18n"],
    },
  },
  resolve: {
    alias: [{ find: "@src", replacement: "/src" }],
  },
});

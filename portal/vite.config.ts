import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "portal",
      filename: "remoteEntry.js",
      remotes: {
        apc: "http://localhost:3001/assets/remoteEntry.js",
      },
      exposes: {
        "./shareStates": "./src/states/shareStates",
      },
      shared: ["react", "react-dom", "react-router-dom", "jotai"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
  },
  resolve: {
    alias: [{ find: "@src", replacement: "/src" }],
  },
});

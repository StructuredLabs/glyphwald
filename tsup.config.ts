import { defineConfig } from "tsup"
import fs from "fs"
import path from "path"

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: {
        entry: {
            index: "src/index.ts"
        },
        compilerOptions: {
            jsx: "react-jsx"
        }
    },
    tsconfig: "tsconfig.build.json",
    splitting: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
    external: ["react", "react-dom"],
    esbuildOptions(options) {
        options.jsx = "automatic"
    },
    outDir: "dist",
    async onSuccess() {
        // Copy CSS files to dist
        const css = fs.readFileSync("src/style.css", "utf8")
        fs.writeFileSync("dist/style.css", css)
    },
})

import autoPreprocess from 'svelte-preprocess';
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import livereload from "rollup-plugin-livereload";
import {terser} from "rollup-plugin-terser";
import alias from 'rollup-plugin-alias';


const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/mfe-main.ts",
  output: {
    sourcemap: true,
    format: "system",
    name: null, // ensure anonymous System.register
    file: "dist/mfe-main.js",
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      preprocess: autoPreprocess(),
      emitCss: false,
    }),
    typescript({sourceMap: !production}),
    alias({
      resolve: ['.ts', '.svelte'],
      entries: {
        pages: './src/pages',
        lib: './src/lib',
      }
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `dist` directory and refresh the
    // browser on changes when not in production
    !production && livereload("dist"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "serve", "--"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        });
      }
    },
  };
}

import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import {terser} from 'rollup-plugin-terser';

const production = process.env.NODE_ENV === "production";

export default {
    input: './js/main.js',
    output: {
        file: "app.js",
        format: "iife"
    },
    plugins: [
        resolve({browser: true, preferBuiltins: true}),
        commonjs({extensions: [".js"]}),
        builtins(),
    ].concat(production ? [terser()] : [])
}
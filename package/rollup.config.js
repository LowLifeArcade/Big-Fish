import { terser } from "rollup-plugin-terser";
import css from 'rollup-plugin-css-only';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss'

export default {
    // preserveModules: true,
    input: 'src/js/index.js',  
    output: [
        {
            name: 'bigfish',
            file: pkg.browser,
            format: 'umd',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    plugins: [
        postcss({
            extensions: ['.css']
        })
        // css({output: 'bundle.css'}), 
        // terser()
    ],
};

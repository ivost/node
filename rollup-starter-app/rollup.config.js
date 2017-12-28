import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
    	file: './public/bundle.js',
    	// -f, --output.format [es]    Type of output (amd, cjs, es, iife, umd)
    	format: 'cjs',
	    sourcemap: false,
	    // external: [ 
	    //   'fs', 'os', 'path'
	    //   ],
	},
	plugins: [
		json(),
		resolve({
			jsnext: true,
      		main: true,
      		browser: false,
      		extensions: ['.js'],
      		preferBuiltins: true, 
      		}),
	    commonjs({
	      	include: 'node_modules/**'
	    	}),
    		// production && uglify() // minify, but only in production
	]
};
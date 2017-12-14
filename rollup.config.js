import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  name: 'gatsby-starter-skeleton-placeholder-mod 1',
  input: 'src/index.jsx',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'PlaceholderModule1',
  },
  plugins: [
    nodeResolve(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          'env',
          {
            modules: false,
          },
        ],
        'react',
      ],
      plugins: [
        'external-helpers',
        'transform-es2015-destructuring',
        'transform-object-rest-spread',
      ],
    }),
    // Allow CommonJS modules to be included in build.
    commonjs(),
  ],
};

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import packageJSON from '../../package.json'

import css from 'rollup-plugin-css-only'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJSON.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJSON.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['./src/**/*.spec.tsx', './src/**/*.spec.ts', './src/**/*.stories.ts'],
      }),
      css({ output: 'style.css' }),
      postcss({
        plugins: [autoprefixer()],
        inject: true, // Inject CSS into the output bundle
        // If you want to extract CSS to a separate file, set extract to true
        // extract: true,
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
]

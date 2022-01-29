import vue from 'rollup-plugin-vue';
import url from '@rollup/plugin-url';
import packageJson from './package.json';

export default {
  input: 'src/Mockup.vue',
  output: [
    {
      format: 'esm',
      file: packageJson.main,
    },
  ],
  plugins: [
    vue(),
    url({
      limit: 3000000,
      include: ['**/*.obj'],
    }),
  ],
};

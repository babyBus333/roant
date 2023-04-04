import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  themeConfig: {
    name: 'roant',
  },
  resolve: { docDirs: ['docSrc'] },
  base: '/roant/',
  publicPath: '/roant/',
  // 解决组件库无样式问题
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
});

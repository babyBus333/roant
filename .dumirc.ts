import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  themeConfig: {
    name: 'rokid-roant',
  },
  resolve: { docDirs: ['docSrc'] },
  base: '/rokid-roant/',
  publicPath: '/rokid-roant/',
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

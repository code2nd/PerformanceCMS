const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  outputDir: './build',
  productionSourceMap: false,
  devServer: {
    host: '127.0.0.1',
    proxy: {
      '/api': {
        target: 'https://stu.jalamy.cn:3002',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool:
      process.env.NODE_ENV === 'development'
        ? 'cheap-module-source-map'
        : undefined,
    resolve: {
      alias: {
        views: '@/views'
      },
      extensions: ['.ts', '.tsx', '.json', 'vue']
    },
    optimization: {
      splitChunks: {
        minSize: 150 * 1024,
        maxSize: 150 * 1024
        /* cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            filename: 'static/js/[id].[contenthash:8].venders.js',
            chunks: 'all'
          }
        } */
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`
      }
    },
    plugins: [
      // AutoImport 和 Components 两个插件配置实现按需自动导入 Element-Plus组件
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/mixins.less')]
    }
  }
}

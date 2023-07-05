import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
  devServer: DevServerConfiguration
}

// настройки для времени разработки
export const developmentConfiguration = (outputPath: string | undefined): Configuration => {
  return {
    target: 'web',
    
    mode: 'development',

    devtool: 'source-map',

    output: {
      path: outputPath ? outputPath : path.resolve(__dirname, 'static/development/'),
    },

    devServer: {
      hot: true,
      port: 3000,
      allowedHosts: 'all',
      open: true,
      client: {
        overlay: false,
      },
      static: [
        path.resolve(__dirname, 'public'),
        path.resolve(__dirname, 'node_modules/@ois-design-ui')    // Чтобы были доступны темы по ссылке
      ],
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:22189/wrw/',
        },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Белоруснефть',
        template: 'public/index.html',
      })
    ]
  }
}

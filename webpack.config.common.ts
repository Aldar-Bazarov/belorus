import path from 'path'
import { Configuration, container } from 'webpack'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
const { ModuleFederationPlugin } = container
import { dependencies as deps } from './package.json'


// общие настройки Webpack
export const commonConfiguration = (): Configuration => {
  return ({
    resolve: {
      extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
      alias: {
        '@api': path.resolve(__dirname, 'src/api'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@utils': path.resolve(__dirname, 'src/utils')
      }
    },
    
    output: {
      filename: '[name]-bundle.[contenthash].js',
      publicPath: 'auto',
      clean: true
    },

    optimization: {
      splitChunks: false
    },

    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.s[ac]ss$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        },
        {
          test: /\.less$/,
          oneOf: [
            {
              test: /\.module/,
              use: [ {
                loader: 'style-loader',
              }, {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: {                
                    localIdentName: '[local]--[hash:base64:5]',
                    exportLocalsConvention: 'camelCase',
                  },
                }
              }, {
                loader: 'less-loader',
                options: {
                  lessOptions: { javascriptEnabled: true }
                }
              } ],
            },
            {
              test: /\.less$/,
              use: [ {
                loader: 'style-loader',
              }, {
                loader: 'css-loader',
              }, {
                loader: 'less-loader',
                options: {
                  lessOptions: { javascriptEnabled: true }
                }
              } ]
            },
          ],
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: '@svgr/webpack',
              options: {
                babel: false,
                icon: true,
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/i, 
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        }
      ]
    },

    plugins: [
      // new BundleAnalyzerPlugin({   // Подключать только в случае необходимости 
      //   analyzerMode: 'static',
      //   openAnalyzer: false // по умолчанию TRUE, чтобы открывать результат в браузере
      // }),
      new ModuleFederationPlugin({
        name: 'belorus',
        filename: 'belorus.js',
        exposes: {
          './renderBelorus': './src/render',
        },
        shared: {
          ...deps,
          react: { 
            requiredVersion: deps['react'],
            singleton: true,
          },
          'react-dom': {
            requiredVersion: deps['react-dom'],
            singleton: true,
          }
        }
      })
    ]
  })
}

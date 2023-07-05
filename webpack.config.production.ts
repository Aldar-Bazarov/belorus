import path from 'path'
import { Configuration } from 'webpack'

// настройки для публикации
export const productionConfiguration = (outputPath: string | undefined): Configuration => {
  return {
    mode: 'production',

    target: [ 'web', 'es5' ],

    output: {
      path: outputPath ? outputPath: path.resolve(__dirname, 'static/production/')
    },
  }
}

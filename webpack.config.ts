import path from 'path'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import { commonConfiguration } from './webpack.config.common'
import { developmentConfiguration } from './webpack.config.development'
import { productionConfiguration } from './webpack.config.production'

interface IWebpackArgs { 
  mode?: string
}
interface IEnvVariables { 
  SBS: boolean
}

// подготавливает конфигурацию Webpack в зависимости от переданного mode
export default ( { SBS }: IEnvVariables, { mode }: IWebpackArgs): Configuration => {
  const outputPath = SBS ? path.resolve(__dirname, './src/') : undefined

  switch (mode) {
    case 'development':
      return merge(commonConfiguration(), developmentConfiguration(outputPath))

    case 'production':
      return merge(commonConfiguration(), productionConfiguration(outputPath))

    default:
      throw new Error('Нет подходящей конфигурации!')
  }
}
import render from './render'
import { Mediator } from '@ois-design-ui/components'

const localUrl = `${location.origin}/`

render({
  elementId: 'root',
  lang: 'ru',
  locale: 'ru-RU',
  slug: 'belorus-app',
  mediator: new Mediator(),
  baseUrl: localUrl,
  navigatorUrl: localUrl,
  url: localUrl,
  sessionId: '',
  context: '',
  userInfo: undefined
})

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'

import { ReactApplicationContainer } from '@containers/react-application-container'
import { IStartAppEventArgs, IShellAppBeforeClose } from '@ois-design-ui/components'

export default function render(args: IStartAppEventArgs): void {
  const rootElement = document.getElementById(args.elementId)

  if (args.mediator) {
    args.mediator.once(`shell:app:triedToClose:${args.elementId}`, ({ closeFunc }: IShellAppBeforeClose) => {
      ReactDOM.unmountComponentAtNode(rootElement)
      closeFunc()
    })
  }

  ReactDOM.render(<ReactApplicationContainer />, rootElement)
}
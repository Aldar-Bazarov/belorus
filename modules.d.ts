/* eslint-disable @typescript-eslint/no-explicit-any -- это нужно для импорта файлов */
declare module 'react-dom/client';

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.less' {
  const classes: { [key: string]: string }
  export default classes
}

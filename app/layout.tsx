import React, { PropsWithChildren } from 'react'

const GlobalLayout = ({children}: PropsWithChildren) => {
  return (
    <div>{children}</div>
  )
}

export default GlobalLayout;
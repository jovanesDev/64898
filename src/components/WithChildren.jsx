import React from 'react'

const WithChildren = ({children}) => {
  return (
    <div>
        <h1>Yo soy Prefijo</h1>
        {children}
    </div>
  )
}

export default WithChildren
import React from 'react'

const WithTitle = (props) => {
    const {text,children} = props
  return (
    <div style={{margin:"40px auto",width:'600px',}}>
        <h4>{text}</h4>
        {children}
    </div>
  )
}

export default WithTitle
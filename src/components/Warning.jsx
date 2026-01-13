import React from 'react'

const Warning = ({ warning }) => {
  
  if (!warning) return null;
  
  return <div>{warning}</div>
}

export default Warning
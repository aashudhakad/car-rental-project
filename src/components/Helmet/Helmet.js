import React from 'react'

const Helmet = (props) => {
  return (
    document.title="Rent Car Service-" + props.title,
    <div className='w-100'>{props.children}</div>
  )
}

export default Helmet
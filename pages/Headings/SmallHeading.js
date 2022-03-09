import React from 'react'

function SmallHeading(props) {
  return (
   <>
   <h1 className='font-semibold text-xl my-4'>{props.heading}</h1>
   </>
  )
}

export default SmallHeading
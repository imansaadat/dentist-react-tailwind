import React from 'react'

const Heading = ({title}) => {
  return (
    <>
     <h2
          className="font-semibold text-2xl md:text-4xl text-black mb-10 text-center uppercase"
        >
          {title}
        </h2>
    </>
  )
}

export default Heading
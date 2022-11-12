import React from 'react'

const Button = ({text,btnStyle}) => {
  return (
    <>
    <button className={`text-white bg-blue py-4 px-12 rounded hover:bg-black inline-block hover:duration-300 ${btnStyle}`}>{text}</button>
    </>
  )
}

export default Button

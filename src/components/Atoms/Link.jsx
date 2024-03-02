import React from 'react'

export const Link = ({ text, link }) => {
  return (
   <a className='text-white bg-none hover:bg-[#d66f16] p-2 px-6 rounded-md cursor-pointer' href={ link } > { text } </a>
  )
}

import React from 'react'

export const Button = ({onClick, children, prop}) => {
  return (
    <button onClick={onClick} className=' lg:text-xl md:text-xl sm:text-sm font-semibold rounded-md lg:px-4 md:px-2 sm:p-1 p-1 bg-sky-600 text-sky-200 hover:bg-sky-400 hover:text-sky-50' {...prop}>
        {children}
    </button>
  )
}

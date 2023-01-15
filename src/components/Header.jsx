import React from 'react'

function Header({category, title}) {
  return (
    <div className='mt-10'>
      <p className='text-grey-400'>
        {category}

      </p>
      
      <p className='text-3xl font-extrabold tracking-light text-slate-900'>{title}</p>
      </div>

  
  )
}

export default Header
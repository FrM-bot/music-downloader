import React, { ReactElement } from 'react'

const Card = ({ children }: { children: ReactElement }) => {
  return (
    <div className='shadow-lg px-3 py-2 rounded bg-cyan-100 dark:bg-black border-[2px] dark:border-custom-dark dark:shadow-black/50'>
        {children}
    </div>
  )
}

export default Card
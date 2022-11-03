import React, { ButtonHTMLAttributes, ReactElement } from 'react'

const Button = ({ children, props }: { children: ReactElement | string, props: ButtonHTMLAttributes<HTMLButtonElement> }) => {
  return (
    <button className='rounded-md dark:bg-custom-dark-2 bg-white shadow-lg px-4 py-2 hover:shadow-black/30 hover:shadow-lg hover:border-custom-dark-2 hover:tracking-widest dark:hover:text-white dark:hover:bg-black text-base hover:bg-black hover:text-white [transition:all_.3s_ease] border-[1px] border-black' {...props}>{children}</button>
  )
}

export default Button
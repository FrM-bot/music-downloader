import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import IconLoader from './icons/IconLoader'

const Button = ({ children, props, isLoading }: { children: ReactElement | string, isLoading?: boolean, props: ButtonHTMLAttributes<HTMLButtonElement> }) => {
  return (
    <button className='border py-2 px-3 rounded-md shadow-xl border-transparent dark:[background:linear-gradient(to_right,rgb(var(--custom-dark)),rgb(var(--custom-dark)))_padding-box,linear-gradient(to_right,rgb(var(--secondary)),rgb(var(--primary)))_border-box] [background:linear-gradient(to_right,#fff,#fff)_padding-box,linear-gradient(to_right,rgb(var(--secondary)),rgb(var(--primary)))_border-box]' {...props}>
      {
        isLoading ?
          <span className='flex items-center gap-1'>
            <IconLoader />
            Loading...
          </span>
          :
          <>
            {children}
          </>
      }
    </button>
  )
}

export default Button
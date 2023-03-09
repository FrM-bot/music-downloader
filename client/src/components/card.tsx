import React, { ReactElement } from 'react'

const Card = ({ children }: { children: ReactElement }) => {
  return (
    <div className='border-[3px] py-2 px-3 rounded-md shadow-xl border-transparent dark:[background:linear-gradient(to_right,rgb(var(--custom-dark)),rgb(var(--custom-dark)))_padding-box,linear-gradient(to_right,rgb(var(--secondary)),rgb(var(--primary)))_border-box] [background:linear-gradient(to_right,#fff,#fff)_padding-box,linear-gradient(to_right,rgb(var(--secondary)),rgb(var(--primary)))_border-box]'
    >
      {children}
    </div>
  )
}

export default Card
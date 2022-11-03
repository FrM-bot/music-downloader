import React, { ReactElement } from "react"

const defaultStylesCard = 'after:absolute after:bg-gradient-to-l after:from-[#da62c4] after:to-custom-cyan after:w-full after:h-px after:duration-300 after:bottom-0 after:left-0 relative after:rounded-md after:shadow-lg py-1 px-2 w-fit whitespace-nowrap'

export const TextSubline = ({ children, className }: {  children: ReactElement | string, className?: string }) => {
  return (
        <span className={className ? `${defaultStylesCard} ${className}` : defaultStylesCard}>{ children }</span>
  )
}

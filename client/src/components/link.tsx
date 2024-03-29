import React, { AnchorHTMLAttributes, ReactElement } from "react"

const Link = ({ children, props }: { children: ReactElement | string, props: AnchorHTMLAttributes<HTMLAnchorElement> }) => {
  return (
    <a className="dark:bg-custom-dark dark:text-white px-3 py-2 after:absolute after:bg-gradient-to-l after:from-secondary after:to-primary after:w-full after:rounded-sm after:h-[2px] after:bottom-0 after:left-0 after:scale-x-0 after:duration-300 after:z-[5] grid place-content-center relative p-1 w-fit hover:after:scale-x-100 shadow-xl
    border-tertiary rounded-sm bg-white hover:shadow-lg duration-300" {...props}>{children}</a>
  )
}

export default Link
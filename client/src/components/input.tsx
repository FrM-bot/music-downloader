import React, { InputHTMLAttributes } from 'react'

export default function Input({ props }: { props: InputHTMLAttributes<HTMLInputElement> }) {
    return (
            <input
                className="shadow-lg dark:shadow-black/30 block bg-white dark:text-white text-black py-2 px-3 w-full dark:bg-custom-dark-2 rounded-md text-base border-black border-[1px] outline-none"
                {...props}
            />
    )
}

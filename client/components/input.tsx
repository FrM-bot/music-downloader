import React, { InputHTMLAttributes } from 'react'

export default function Input({ props }: { props: InputHTMLAttributes<HTMLInputElement> }) {
    return (
            <input
                className="shadow-lg dark:shadow-black/30 block bg-white py-2 px-3 w-full dark:bg-custom-dark-2 rounded-md text-base border-black border-[1px] text-black outline-none"
                {...props}
            />
    )
}

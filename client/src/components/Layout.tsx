import React from 'react'
import { TextSubline } from './text'
import DarkmodeButton from './darkmodeButton'
const Layout = ({ children }) => {
    return (
        <>
            <div className='dark:bg-zinc-900 dark:text-white text-black min-h-screen'>
                <div className='m-auto lg:max-w-[70vw] max-w-[95vw] px-4'>
                    <header className='sticky top-2'>

                        <div className='shadow-xl p-3 flex justify-between items-center rounded-md bg-white/50 dark:bg-custom-dark-2/50 backdrop-blur-[3px]'>
                            <h1>Music Downloader</h1>
                            <nav>
                                <DarkmodeButton />
                            </nav>
                        </div>
                    </header>
                    <main className='mt-8'>
                        {
                            children
                        }
                    </main>
                    <footer className="after:absolute after:bg-gradient-to-l after:from-[#da62c4] after:to-custom-cyan after:w-full after:h-[1px] after:duration-300 after:top-0 after:left-0 relative after:rounded-md after:shadow-xl mt-4 py-4">
                        <div className="flex md-center">
                            <p>Built and Design by <TextSubline>Maciel Franco</TextSubline></p>
                        </div>
                        <div className="flex justify-end">
                            <TextSubline>damianmaciel0@gmail.com</TextSubline>
                        </div>

                    </footer>
                </div>
            </div>
        </>
    )
}

export default Layout
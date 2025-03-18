import React from 'react'

function ExploreBlog() {
    return (
        <>
            <div className='flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 gap-4 sm:gap-9 bg-purple-300 w-full' >
                <h1 className='mt-4 font-extrabold text-slate-700 text-2xl sm:text-3xl md:text-4xl underline text-center'>Explore Published Articles...</h1>

                <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-9 mt-4 sm:mt-9 w-full'>
                    <div className='list-image-none md:list-image-[url(v.jpg)] w-full'></div>
                </div>
            </div>
        </>
    )
}

export default ExploreBlog

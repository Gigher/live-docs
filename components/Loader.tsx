import Image from 'next/image'
import Lottie from 'lottie-react'
import FileLoader from '@/public/assets/icons/file-loader.json';
import React from 'react'

const Loader = () => {
  return (
    <div className='loader flex flex-col'>
        {/* <Image src="/assets/icons/loader.svg" alt='Loader' width={32} height={32} className='animate-spin' /> */}
        <Lottie animationData={FileLoader}className='h-20 w-20' />
        Loading ...
    </div>
  )
}

export default Loader
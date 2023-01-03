import React from 'react'

const LoadingCard = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 rounded-md w-[350px] sm: w-[300px]'>
      <div className='w-[50%] h-10 loading'></div>
      <div className='h-[350px] w-full  loading' />
      <div className='w-full h-10 loading'></div>
      <div className='w-full h-10 loading'></div>
    </div>
  )
}

export default LoadingCard

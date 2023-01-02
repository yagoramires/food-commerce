import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { MdFastfood } from 'react-icons/md'

const Main = () => {
  return (
    <>
      <Sidebar />
      <section className='w-full h-[100vh] bg-black100 p-8 text-white'>
        <div className='flex items-center w-full gap-2 sm:justify-center'>
          <MdFastfood size={40} className='text-yellow' />
          <h1 className='flex flex-col justify-center font-bold'>
            <span className='leading-[16px]'> Food </span>{' '}
            <span className='text-red leading-[16px]'> Commerce</span>
          </h1>
        </div>
        <Outlet />
      </section>
    </>
  )
}

export default Main

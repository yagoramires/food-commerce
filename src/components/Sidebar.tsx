import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { FaHamburger, FaPizzaSlice, FaWineBottle, FaIceCream } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <aside
      className={`flex flex-col items-center justify-between p-4 text-white bg-red transition-all duration-250 sm:fixed sm:left-0 sm:right-0 sm:bottom-0 sm:z-[999] sm:w-full sm:flex-row ${
        menuOpen ? 'w-[16rem]' : 'w-[8rem] '
      }`}
    >
      <button type='button' className='sm:hidden' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CgClose size={25} /> : <GiHamburgerMenu size={25} />}
      </button>
      <nav className='h-full sm:w-full'>
        <ul className='flex flex-col justify-center h-full gap-10 sm:flex-row sm:gap-6'>
          <li>
            <NavLink
              to='/burgers'
              className='flex items-center gap-4 px-4 transition-all duration-200 border-l-4 sm:border-none hover:border-l-yellow border-l-red hover:text-yellow'
            >
              <FaHamburger size={30} />
              {menuOpen && <span>Hambúrgueres</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pizzas'
              className='flex items-center gap-4 px-4 transition-all duration-200 border-l-4 sm:border-none hover:border-l-yellow border-l-red hover:text-yellow'
            >
              <FaPizzaSlice size={30} />
              {menuOpen && <span>Pizzas</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/drinks'
              className='flex items-center gap-4 px-4 transition-all duration-200 border-l-4 sm:border-none hover:border-l-yellow border-l-red hover:text-yellow'
            >
              <FaWineBottle size={30} />
              {menuOpen && <span>Bebidas</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/ice-creams'
              className='flex items-center gap-4 px-4 transition-all duration-200 border-l-4 sm:border-none hover:border-l-yellow border-l-red hover:text-yellow'
            >
              <FaIceCream size={30} />
              {menuOpen && <span>Sorvetes</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

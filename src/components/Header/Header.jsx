import Logo from '../Logo'
import NavLinks from './NavLinks'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCallback, useState } from 'react';
import MobileMenu from './MobileMenu';




export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prevState) => !prevState)
  }, [])

  return (


    <div className=' container relative h-[77.41px] border-b'>

      <div className="items-center flex justify-between py-5 gap-1 fixed top-0 right-0 left-0 bg-white dark:bg-slate-950 z-50 container">
        <div className='flex text-red-600'>
          <Logo />
        </div>

        <NavLinks className={'hidden justify-between items-center gap-4 lg:gap-10 md:flex'} />

        <div className='flex items-center justify-between gap-3'>

          <div className='relative min-w-0 lg:min-w-80'>
            <input className='bg-stone-200 dark:bg-gray-600 outline-none rounded-sm w-full h-full py-1.5 text-black pl-1 pr-6 dark:text-red-400' placeholder='What are you looking for?' type="text" />
            <FaSearch className='absolute top-0 bottom-0 right-2 my-auto' size={20} />
          </div>
          <button className='btn hidden md:block btn-circle min-h-0 bg-transparent p-2 w-fit h-fit dark:text-white'><FaRegHeart size={20} /></button>
          <button className='btn btn-circle min-h-0 bg-transparent p-2 w-fit h-fit dark:text-white'><AiOutlineShoppingCart size={20} /></button>

          <div onClick={toggleMenu} className='z-50 min-w-8 h-8 md:hidden bg-transparent border dark:bg-gray-600 border-black rounded-sm flex items-center justify-center cursor-pointer'>
            <div className={`w-6 h-[3px] relative rounded-md bg-black transition-all ${isMobileMenuOpen ? 'invisible' : ''}
            after:rounded-md after:transition-all after:w-6 after:h-[3px] after:bg-black after:top-2 after:absolute after:visible ${isMobileMenuOpen ? 'after:rotate-45 after:-translate-y-2' : ''}
            before:rounded-md before:transition-all before:w-6 before:h-[3px] before:bg-black before:bottom-2 before:absolute before:visible ${isMobileMenuOpen ? 'before:-rotate-45 before:translate-y-2 ' : ''}`}>
            </div>
          </div>

        </div>

        <MobileMenu toggleMenu={toggleMenu} isOpen={isMobileMenuOpen} />

      </div>

      <div className={` ${!isMobileMenuOpen && 'hidden'} fixed w-screen h-screen top-0 bottom-0 right-0 bg-black opacity-20 z-10`}></div>


    </div>

  )
}

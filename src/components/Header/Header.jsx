import Logo from '../Logo'
import NavLinks from './NavLinks'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";




export default function Header() {
  return (

    <div className="container items-center flex justify-between py-2">
      <div className='flex text-red-600'>
        <Logo />
      </div>

      <NavLinks className={'hidden justify-between items-center gap-4 lg:gap-10 md:flex'} />


      <div className='flex items-center justify-between gap-3'>

        <div className='relative min-w-0 lg:min-w-80'>
          <input className='bg-stone-200 outline-none rounded-sm w-full h-full py-1.5 text-black pl-1 pr-6 dark:text-red-400' placeholder='What are you looking for?' type="text" />
          <FaSearch className='absolute top-0 bottom-0 right-2 my-auto' size={20} />
        </div>
        <button className='btn btn-circle min-h-0 bg-transparent p-2 w-fit h-fit hover:bg-red-600'><FaRegHeart size={20} /></button>
        <button className='btn btn-circle min-h-0 bg-transparent p-2 w-fit h-fit hover:bg-red-600'><AiOutlineShoppingCart size={20} /></button>
      </div>


    </div>
  )
}

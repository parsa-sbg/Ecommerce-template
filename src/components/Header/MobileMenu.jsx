import NavLinks from "./NavLinks"
import { FaRegHeart } from "react-icons/fa"
import propTypes from 'prop-types'

export default function MobileMenu({isOpen}) {
    return (
        <div className={`container md:hidden  absolute top-full overflow-hidden right-0 left-0 transition-all duration-300 ${isOpen ? 'max-h-72' : 'max-h-0 overflow-hidden'} `}>
            <div className='bg-white dark:bg-black p-2 flex gap-5 flex-col'>
                <span className='flex w-fit items-center gap-2 cursor-pointer hover:text-red-600 transition-colors'>fovrates <FaRegHeart /></span>
                <NavLinks className={'flex gap-5 justify-center break-words text-nowrap flex-wrap flex-col'} />
            </div>
        </div>
    )
}

MobileMenu.propTypes = {
    isOpen: propTypes.bool
}


import NavLinks from "./NavLinks"
import { FaRegHeart } from "react-icons/fa"
import propTypes from 'prop-types'
import HomeMenu from "../Home/HomeMenu"

export default function MobileMenu({ isOpen }) {
    return (
        <div className={`container flex justify-center gap-8 bg-white  md:hidden  absolute top-full overflow-hidden right-0 left-0 transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'} `}>
            <div className="">
                <h2 className="pl-5 mb-4 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto before:w-4 before:h-1 before:bg-red-600" >categories : </h2>
                <HomeMenu></HomeMenu>
            </div>
            <div className=' dark:bg-black flex flex-col'>
                <h2 className="pl-5 mb-4 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto before:w-4 before:h-1 before:bg-red-600" >categories : </h2>
                <NavLinks className={'flex gap-5 justify-center break-words text-nowrap flex-wrap flex-col'} />
                <span className='flex w-fit items-center gap-2 cursor-pointer hover:text-red-600 transition-colors'>fovrates <FaRegHeart /></span>

            </div>
        </div>
    )
}

MobileMenu.propTypes = {
    isOpen: propTypes.bool
}


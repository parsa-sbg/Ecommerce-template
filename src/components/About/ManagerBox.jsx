import propTypes from 'prop-types'
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";




export default function ManagerBox({ imageUrl, name, jobPosition }) {
    return (
        <div className='h-full w-full flex flex-col justify-end'>
            <div className='flex items-end justify-center rounded-sm'>
                <img className='h-full  object-contain ' src={imageUrl} alt="" />
            </div>
            <h6 className='font-semibold text-2xl mt-3'>{name}</h6>
            <span className='text-sm'>{jobPosition}</span>
            <div className='flex gap-2 items-center md:justify-start mt-0.5 justify-center'>
                <LuTwitter className='cursor-pointer' size={20} />
                <FaInstagram className='cursor-pointer' size={20} />
                <FaLinkedin className='cursor-pointer' size={20} />
            </div>
        </div>
    )
}

ManagerBox.propTypes = {
    imageUrl: propTypes.string,
    name: propTypes.string,
    jobPosition: propTypes.string
}

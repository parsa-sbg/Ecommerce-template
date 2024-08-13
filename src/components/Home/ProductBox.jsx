import propTypes from 'prop-types'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";




export default function ProductBox({ imageUrl, title, price, priceBeforeOff, offPercent, isNew}) {
  return (
    <div>

      <div className='group mb-4 relative flex items-center p-5 justify-center bg-stone-200 dark:bg-slate-950 rounded-sm h-52 min-[450px]:p-10 min-[550px]:h-64 sm:h-48 md:h-[15rem] lg:p-12 '>
        <img className='h-full object-contain' src={imageUrl} alt="product image" />

        <div className='cursor-pointer absolute top-2 right-2 bg-white dark:bg-slate-950 rounded-full p-0.5'>
          <CiHeart size={22} />
        </div>

        <div className='cursor-pointer absolute top-10 right-2 bg-white dark:bg-slate-950 rounded-full p-0.5'>
          <IoEyeOutline size={22} />
        </div>

        {offPercent &&
          <span className='absolute text-xs px-2 md:text-sm md:px-4  top-2 left-2 bg-red-600 text-[#FAFAFA] py-0.5 rounded-md'>-{offPercent}%</span>
        }

        {isNew &&
          <span className='absolute text-xs px-2 md:text-sm md:px-4  top-2 left-2 bg-green-600 text-[#FAFAFA] py-0.5 rounded-md'>new</span>
        }

        <button className='absolute w-full transition-all bottom-0 right-0 left-0 bg-black text-white max-h-0 overflow-hidden group-hover:max-h-10 group-hover:py-1'>Add To Cart</button>
      </div>

      <div className='flex flex-col gap-1'>
        <h3 className='font-semibold'>{title}</h3>
        <div className='flex items-center gap-2'>
          <span className='text-red-600 font-semibold'>${price}</span>
          {priceBeforeOff && <span className='line-through font-semibold text-stone-500'>${priceBeforeOff}</span>}
        </div>
        <div className='flex items-center gap-1'>
          <FaStar className='text-amber-400' />
          <FaStar className='text-amber-400' />
          <FaStar className='text-amber-400' />
          <FaStar className='text-stone-300' />
          <FaStar className='text-stone-300' />
        </div>
      </div>
    </div>
  )
}

ProductBox.propTypes = {
  imageUrl: propTypes.string,
  title: propTypes.string,
  price: propTypes.number,
  priceBeforeOff: propTypes.number,
  offPercent: propTypes.number,
  isNew: propTypes.bool

}
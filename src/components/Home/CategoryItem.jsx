import propTypes from 'prop-types'

export default function CategoryItem({Svg, name}) {
      
  return (
    <div className='hover:bg-red-600 hover:text-white transition-colors cursor-pointer rounded-md flex flex-col items-center justify-center gap-3 w-full h-full border-stone-300 border-2 font-medium p-10'>
        <Svg size={50} />
        {name}
    </div>
  )
}

CategoryItem.propTypes = {
    Svg: propTypes.func,
    name: propTypes.string
}
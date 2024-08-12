import propTypes from 'prop-types'


export default function StatisticItem({ Icon, number, desc }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 border-2 border-stone-400 p-7 hover:bg-red-600 hover:text-white transition-colors group rounded-md">
            {<Icon className='bg-black mb-5 text-white rounded-full p-2 outline outline-8 outline-stone-400 group-hover:text-black group-hover:bg-white group-hover:outline-red-200 transition-colors' size={50} />}
            <span className='font-bold text-2xl'>{number}k</span>
            <span className='text-sm' >{desc}</span>
        </div>
    )
}

StatisticItem.propTypes = {
    Icon: propTypes.func,
    number: propTypes.number,
    desc: propTypes.string
}
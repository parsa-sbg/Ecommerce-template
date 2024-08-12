import propTypes from 'prop-types'


export default function OurServicesItem({ Icon, title, desc }) {
    return (
        <div className='flex flex-col justify-center items-center'>

            {<Icon className='bg-black mb-8 text-white rounded-full p-2 outline outline-8 outline-stone-400' size={60} />}
            <h5 className='font-bold text-lg'>{title}</h5>
            <p className='mt-1'>{desc}</p>

        </div>
    )
}

OurServicesItem.propTypes = {
    Icon: propTypes.func,
    title: propTypes.string,
    desc: propTypes.string
}

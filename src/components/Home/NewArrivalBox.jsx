import propTypes from 'prop-types'


export default function NewArrivalBox({ title, desc, imageUrl, imageRight }) {

    return (
        <div className='relative w-full text-[#FAFAFA] h-full p-5' >
            <img className={`h-full w-full object-contain ${imageRight && 'absolute right-5 top-0 w-auto'}`} src={imageUrl} alt="" />
            <div className='absolute bottom-5 left-5 flex flex-col gap-1'>
                <h4 className='font-semibold text-xl'>{title}</h4>
                <p className='max-w-52 text-xs' >{desc}</p>
                <button className='w-fit underline'>shop now</button>
            </div>
        </div>
    )
}


NewArrivalBox.propTypes = {
    title: propTypes.string,
    desc: propTypes.string,
    imageUrl: propTypes.string,
    imageRight: propTypes.bool
}
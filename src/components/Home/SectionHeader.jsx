import propTypes from 'prop-types'


export default function SectionHeader({ flagName, title }) {
    return (
        <div className='flex flex-col gap-4 my-8'>
            <span className='relative text-red-600 pl-6 before:absolute before:h-10 before:w-5 before:rounded-md before:bg-red-600 before:left-0 before:top-0 before:bottom-0 before:m-auto '>
                {flagName}
            </span>
            <h3 className='text-4xl font-semibold'>{title}</h3>
        </div>
    )
}

SectionHeader.propTypes = {
    flagName: propTypes.string,
    title: propTypes.string,
    isNeedTimer: propTypes.bool
}

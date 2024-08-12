import propTypes from 'prop-types'
import SiteBtn from '../SiteBtn'


export default function SectionHeader({ flagName, title, isNeedViewAllBtn }) {
    return (
        <div className='flex flex-col gap-4 mb-10'>
            <span className='relative text-red-600 pl-6 before:absolute before:h-10 before:w-5 before:rounded-md before:bg-red-600 before:left-0 before:top-0 before:bottom-0 before:m-auto '>
                {flagName}
            </span>
            <div className='flex justify-between items-center'>
                <h3 className='text-4xl font-semibold'>{title}</h3>
                {isNeedViewAllBtn && <div><SiteBtn noMargin text={'view all'}/></div>}
            </div>
        </div>
    )
}

SectionHeader.propTypes = {
    flagName: propTypes.string,
    title: propTypes.string,
    isNeedTimer: propTypes.bool,
    isNeedViewAllBtn: propTypes.bool
}

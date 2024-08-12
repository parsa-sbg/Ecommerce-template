import propTypes from 'prop-types'

export default function SiteBtn({text, noMargin}) {
  return (
    <button className={`w-full h-full transition-colors px-6 rounded-md hover:bg-red-700 bg-red-600 text-white text-nowrap ${!noMargin && 'my-10'} py-3`}>{text}</button>
  )
}

SiteBtn.propTypes = {
    text: propTypes.string,
    noMargin: propTypes.bool
}
import propTypes from 'prop-types'


export default function NavLinks({className}) {


  return (
    <nav className='h-fit'>
      <ul className={className}>
        <li><a href='#' className='hover:text-red-600 transition-colors' >Home</a></li>
        <li><a href='#' className='hover:text-red-600 transition-colors' >Contact</a></li>
        <li><a href='#' className='hover:text-red-600 transition-colors' >About</a></li>
        <li><a href='#' className='hover:text-red-600 transition-colors' >Sign Up</a></li>
      </ul>
    </nav>
  )
}

NavLinks.propTypes = {
  className : propTypes.string
}
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function NavLinks({className}) {


  return (
    <nav className='h-fit'>
      <ul className={className}>
        <li><Link to='/' className='hover:text-red-600 transition-colors' >Home</Link></li>
        <li><Link to={'contact'} className='hover:text-red-600 transition-colors' >Contact</Link></li>
        <li><Link to={'about'} className='hover:text-red-600 transition-colors' >About</Link></li>
        <li><Link to={'signUp'} className='hover:text-red-600 transition-colors' >Sign Up</Link></li>
      </ul>
    </nav>
  )
}

NavLinks.propTypes = {
  className : propTypes.string
}
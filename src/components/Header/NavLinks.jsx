import propTypes from 'prop-types'
import { memo } from 'react'
import { Link } from 'react-router-dom'


const NavLinks = memo(({ className, toggleMenu }) => {

  return (
    <nav className='h-fit'>
      <ul className={className}>
        <li onClick={() => { toggleMenu && toggleMenu() }} ><Link to='/' className='hover:text-red-600 transition-colors' >Home</Link></li>
        <li onClick={() => { toggleMenu && toggleMenu() }} ><Link to={'contact'} className='hover:text-red-600 transition-colors' >Contact</Link></li>
        <li onClick={() => { toggleMenu && toggleMenu() }} ><Link to={'about'} className='hover:text-red-600 transition-colors' >About</Link></li>
        <li onClick={() => { toggleMenu && toggleMenu() }} ><Link to={'signUp'} className='hover:text-red-600 transition-colors' >Sign Up</Link></li>
      </ul>
    </nav>
  )
})

NavLinks.displayName = 'NavLinks'

NavLinks.propTypes = {
  className: propTypes.string,
  toggleMenu: propTypes.func
}

export default NavLinks
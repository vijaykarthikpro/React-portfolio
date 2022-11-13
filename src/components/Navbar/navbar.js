import { Link, NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar/sidebar'
import './navbar.scss'

// import LogoS from'../../assets/images/logo-s.png'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src="" alt='logo'/>
            </Link>
            <nav>
                <a href="#" className='btn'>Home</a>
                <a href="#about" className='btn'>About</a>
                <a href="#portfolio" className='btn'>Portfolio</a>
                <a href="#contact" className='btn'>Contact</a>
            </nav>
            <Sidebar/>
            <span className='scroll-down'>Scroll down -{'>'}</span>
        </div>
    )
}

export default Navbar
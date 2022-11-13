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
                <NavLink exact="true" activeclassname="active" to='/'>
                    <button className='btn'>Home</button>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <button className='btn'>About</button>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <button className='btn'>Portfolio</button>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <button className='btn'>Contact</button>
                </NavLink>
            </nav>
            <Sidebar/>
            <span className='scroll-down'>Scroll down -></span>
        </div>
    )
}

export default Navbar
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
                    <h2>Home</h2>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <h2>About</h2>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <h2>Portfolio</h2>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <h2>Contact</h2>
                </NavLink>
            </nav>
            <Sidebar/>
        </div>
    )
}

export default Navbar
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/sidebar'
import './navbar.scss'
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logo} alt='logo'/>
                {/* <span>VIJAY KARTHIK BETHAPUDI</span> */}
            </Link>
            <Sidebar/>
            <span ><a href='#about' className='scroll-down'>Scroll down -{'>'}</a></span>
        </div>
    )
}

export default Navbar
import './smallNav.scss';
import {IoHomeOutline} from 'react-icons/io5';
import {BiUser, BiBookContent} from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi'

const SmallNav = () =>{
    return (
        <nav className='small-nav'>
            <a href="#" aria-label="Home"><IoHomeOutline/></a>
            <a href="#about" aria-label="About"><BiUser/></a>
            <a href="#portfolio" aria-label="Portfolio"><BiBookContent/></a>
            <a href="#contact" aria-label="Contact"><FiPhoneCall/></a>
        </nav>
    )
}

export default SmallNav
import HomeContent from '../HomeContent/homeContent';
import Navbar from '../Navbar/navbar'
import Waves from '../Waves/waves';
import './layout.scss';

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Waves/>
            <HomeContent/>
        </>
    )
}

export default Layout
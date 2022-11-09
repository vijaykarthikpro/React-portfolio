import Navbar from '../Navbar/navbar'
import Sidebar from'../Sidebar/sidebar'
import Waves from '../Waves/waves';
import './layout.scss';

const Layout = () => {
    return (
        <>
            <Waves/>
            <Navbar/>
            <Sidebar/>
        </>
    )
}

export default Layout
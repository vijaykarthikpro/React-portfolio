import Navbar from '../Navbar'
import Sidebar from'../Sidebar'
import Waves from '../Waves';
import './index.scss';

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
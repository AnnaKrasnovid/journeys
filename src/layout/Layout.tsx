import { Outlet } from 'react-router-dom';
import Header from '../components/basic/Header/Header';
// import Footer from '../components/Footer/Footer';
// import SideBar from '../components/SideBar/SideBar';

import './Layout.scss';

function Layout() {
    return (
        <div className="layout">
            <div className='page'>
                <Header />
                <main className="section-width main-container">
                    <Outlet />
                </main>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default Layout;
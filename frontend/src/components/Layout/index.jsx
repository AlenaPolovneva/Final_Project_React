import { Outlet } from "react-router";

import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";

import styles from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.mainContainer}>
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout;
import { NavLink } from "react-router";

import { sideBarRoutes } from "../../helpers/sideBarRoutes.jsx";

import styles from "./Sidebar.module.css";

const Sidebar= () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.nav}>
                {sideBarRoutes.map(({label, path, icon}) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({isActive}) => isActive ? styles.activeLink : styles.link}
                    >
                       <span className={styles.icon}>
                           {icon}
                       </span>
                        <span>{label}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
export default Sidebar;
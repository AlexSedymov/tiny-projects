import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.navbar}>
                <NavLink
                    to="/"
                    className={styles.nlink}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/hooks"
                    className={styles.nlink}
                >
                    Hooks
                </NavLink>

                <NavLink
                    to="/about"
                    className={styles.nlink}
                >
                    About
                </NavLink>
                <NavLink
                    to="/wood-api"
                    className={styles.nlink}
                >
                    Wood Api
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
import classes from "./Header.module.scss"
import Nav from "../Nav/Nav.jsx";
import Logo from "../../module/Logo/Logo.jsx";


const Header = () => {
    return (
        <div className={classes.Header}>
            <div className="container">
                <div className={classes.Header__inner}>
                    <Logo/>
                    <Nav/>
                </div>
            </div>
        </div>
    );
}

export default Header;
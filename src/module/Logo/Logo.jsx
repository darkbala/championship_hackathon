import {Link} from "react-router-dom";
import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <Link className={classes.Logo} to="/">
            Logo
        </Link>
    );
};

export default Logo;
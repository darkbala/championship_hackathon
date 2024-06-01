import classes from './HomePage.module.scss'
import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import Tools from "../../components/Tools/Tools.jsx";
import HowItWorks from "../../components/HowItWorks/HowItWorks.jsx";
import Comments from "../../components/Comments/Comments.jsx";
import Footer from '../../components/Footer/Footer.jsx';

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <Hero/>
            <About/>
            <Tools/>
            <HowItWorks/>
            <Comments/>
            <Footer />
        </div>
    )
}


export default HomePage;
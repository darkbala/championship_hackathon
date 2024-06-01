import Video from '../components/Video/Video'
import classes from './HomePage.module.scss'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Comments from '../components/Comments/Comments'
import Tools from "../components/Tools/Tools.jsx";
import About from '../components/About/About.jsx'

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <Hero/>
            <About/>
            <Tools/>
            <HowItWorks/>
            <Comments/>
            <Footer/>
        </div>
    )
}


export default HomePage;
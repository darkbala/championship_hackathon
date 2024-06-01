import cl from "./Hero.module.scss";
import { motion } from "framer-motion";
import tablet from "../../assets/static/images/tablet.png";
import cylinder from "../../assets/static/images/cylinder.png";
import icosahedron from "../../assets/static/images/icosahedron.png";
import mobile from "../../assets/static/images/mobile.png";

const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className={cl.Hero} style={{ width: "100%" }}>
      <div className="container">
        <div className={cl.Hero__inner}>
          <motion.div
            className={cl.Hero__content}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.9 }}
          >
            <h1 className={cl.Hero__title}>
              Легкие и безопасные <br />
              <span className={cl.pink}>онлайн-платежи</span>
            </h1>
            <p className={cl.Hero__text}>
              Миллионы компаний всех размеров используют наш сервис онлайн и
              лично для приема платежей, отправки выплат, автоматизации
              финансовых процессов и увеличения доходов.
            </p>
            <button className={cl.Hero__btn}>Начать сейчас</button>
          </motion.div>

          <motion.div
            className={cl.Hero__images}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.8 } } }}
          >
            <motion.img
              src={tablet}
              alt="Tablet"
              className={cl.Hero__tablet}
              variants={imageVariants}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src={cylinder}
              alt="Cylinder"
              className={cl.Hero__cylinder}
              variants={imageVariants}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src={icosahedron}
              alt="Icosahedron"
              className={cl.Hero__iso}
              variants={imageVariants}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src={mobile}
              alt="Mobile"
              className={cl.Hero__mobile}
              variants={imageVariants}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { motion, useInView } from "framer-motion";
import cl from "./About.module.scss";
import card from "../../assets/static/images/card.png";
import payment from "../../assets/static/images/payment.png";

const About = () => {
  const refContent = React.useRef(null);
  const refImage1 = React.useRef(null);
  const refImage2 = React.useRef(null);

  const isContentInView = useInView(refContent, { once: true });
  const isImage1InView = useInView(refImage1, { once: true });
  const isImage2InView = useInView(refImage2, { once: true });

  return (
    <section className={cl.About}>
      <div className="container">
        <div className={cl.About__inner}>
          <motion.div
            ref={refContent}
            className={cl.About__content}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.5 }}
          >
            <h2 className={cl.About__title}>
              Полностью интегрированный набор платежных продуктов
            </h2>
            <p className={cl.About__text}>
              Мы объединяем все, что требуется для создания веб-сайтов и
              приложений, которые принимают платежи и отправляют выплаты по
              всему миру. Продукты Stripe позволяют осуществлять платежи онлайн
              и лично розничным продавцам, компаниям, занимающимся подпиской,
              программным платформам и маркетплейсам, а также всему, что
              находится между ними.
            </p>
          </motion.div>
          <motion.img
            ref={refImage1}
            src={payment}
            alt="mobile"
            className={cl.About__image}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isImage1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.img
            ref={refImage2}
            src={card}
            alt="card"
            className={cl.About__card}
            initial={{ opacity: 0, x: -100 }}
            animate={
              isImage2InView ? { opacity: 1, x: -340 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

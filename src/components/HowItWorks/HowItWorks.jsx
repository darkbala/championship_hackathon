import cl from "./HowItWorks.module.scss";

const HowItWorks = () => {
    return (
        <section className={cl.howitworks}>
            <div className={cl.container}>
                <h2>Как это работает?</h2>
                <p className={cl.p}>С нашей интуитивно понятной системой вы можете легко интегрировать онлайн-платежи на
                    ваш сайт всего в три простых шага.</p>
                <div className={cl.steps}>
                    <div className={cl.step}>
                        <div className={cl.stepnumber} style={{backgroundColor: '#ff6b6b'}}>1</div>
                        <h3>Зарегистрируйтесь</h3>
                        <p>Пройдите быструю и простую регистрацию на нашей платформе.</p>
                    </div>
                    <div className={cl.step}>
                        <div className={cl.stepnumber} style={{backgroundColor: '#4caf50'}}>2</div>
                        <h3>Настройте параметры</h3>
                        <p>Настройте платежные параметры в соответствии с потребностями.</p>
                    </div>
                    <div className={cl.step}>
                        <div className={cl.stepnumber} style={{backgroundColor: '#3f51b5'}}>3</div>
                        <h3>Начните пользоваться!</h3>
                        <p>Запустите ваш сайт и начните принимать платежи от клиентов.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

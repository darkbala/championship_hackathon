import classes from "./Tools.module.scss";
import CodeEditor from "../CodeEditor/CodeEditor.jsx";

const Tools = () => {
    return (
        <div className={classes.Tools} style={{height: '80  vh', backgroundColor: "white", width: '100%'}}>
            <section className='container conv2'>
                <aside className={classes.text__cont}>
                    <h3>Самые мощные и простые в использовании API <br/>в мире</h3>
                    <h5>Инструменты для каждого стека</h5>
                    <p>Мы предлагаем клиентские и серверные библиотеки на всех языках - от React и PHP до .NET и
                        iOS.</p>

                    <span>
                        <h6>Готовые интеграции</h6>
                        <p>Используйте интеграцию с такими системами, как Shopify, WooCommerce, NetSuite и другими.</p>
                    </span>
                </aside>
                <div className={classes.img__cont}>
                    <CodeEditor/>
                </div>

            </section>
        </div>
    );
};

export default Tools;
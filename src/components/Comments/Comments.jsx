import Comment from './Comment'
import classes from './Comments.module.scss'
import {Link} from 'react-router-dom'
import React from "react";
import Video from "../Video/Video.jsx";


export default function Comments() {
    const data = [
        {
            image: 'https://i.seadn.io/gae/jCQAQBNKmnS_AZ_2jTqBgBLIVYaRFxLX6COWo-HCHrYJ1cg04oBgDfHvOmpqsWbmUaSfBDHIdrwKtGnte3Ph_VwQPJYJ6VFtAf5B?auto=format&dpr=1&w=1000',
            text: 'Невероятно! Не могу поверить, что настройка нашего интернет-магазина заняла всего несколько минут. Все было просто и понятно.',
            author: 'Алексей Смирнов'
        },
        {
            image: 'https://i.seadn.io/gae/jCQAQBNKmnS_AZ_2jTqBgBLIVYaRFxLX6COWo-HCHrYJ1cg04oBgDfHvOmpqsWbmUaSfBDHIdrwKtGnte3Ph_VwQPJYJ6VFtAf5B?auto=format&dpr=1&w=1000-2',
            text: 'Отличный сервис! Все настроил очень быстро и без проблем.',
            author: 'Мария Иванова'
        },
        {
            image: 'https://i.seadn.io/gae/jCQAQBNKmnS_AZ_2jTqBgBLIVYaRFxLX6COWo-HCHrYJ1cg04oBgDfHvOmpqsWbmUaSfBDHIdrwKtGnte3Ph_VwQPJYJ6VFtAf5B?auto=format&dpr=1&w=1000-3',
            text: 'Очень удобный интерфейс и множество полезных функций. Рекомендую всем!',
            author: 'Иван Петров'
        },
        {
            image: 'https://i.seadn.io/gae/jCQAQBNKmnS_AZ_2jTqBgBLIVYaRFxLX6COWo-HCHrYJ1cg04oBgDfHvOmpqsWbmUaSfBDHIdrwKtGnte3Ph_VwQPJYJ6VFtAf5B?auto=format&dpr=1&w=1000-4',
            text: 'Настройка прошла гладко, все работает прекрасно. Спасибо!',
            author: 'Ольга Сидорова'
        },
        {
            image: 'https://i.seadn.io/gae/jCQAQBNKmnS_AZ_2jTqBgBLIVYaRFxLX6COWo-HCHrYJ1cg04oBgDfHvOmpqsWbmUaSfBDHIdrwKtGnte3Ph_VwQPJYJ6VFtAf5B?auto=format&dpr=1&w=1000-5',
            text: 'Лучший сервис для создания интернет-магазинов. Быстро, просто и эффективно.',
            author: 'Дмитрий Кузнецов'
        }
    ]

    return (
        <div className={classes.Comments}>
            <section style={{marginTop: '-17rem',marginBottom:"100px", display: "flex", justifyContent: "center"}} className="container">
                <Video/>
            </section>
            <h1>+1,749 команд поделились своим опытом использования нашего сервиса!</h1>
            {data.slice(2).map((comment, index) => {
                return <Comment key={index} data={comment}/>
            })}
            <Link to={'/comments'}>Все отзывы {'->'}</Link><Link/>
        </div>
    )
}

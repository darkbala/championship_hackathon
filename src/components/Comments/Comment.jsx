import classes from './Comments.module.scss'

export default function Comment({data}) {
    return (
        <div className={classes.Comment}>
            <img width={100} src={data.image}/>
            <div className={classes.info}>
                <p>{data.text}</p>
                <span>{data.author}</span>
            </div>
        </div>
    )
}

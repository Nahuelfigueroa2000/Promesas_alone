import style from "./booksStyle.module.css"

export default function Capitulo(chapter){
    return(
        <div>
            <h1>The chapter is, <strong className={style.chapter}>{chapter}</strong></h1>
        </div>
        
    )
}
import style from "./booksStyle.module.css"

export default function Cards({name,id}){
    return(
        
        <div>
            
            <h1>The name of the story is, <strong className={style.name}>{name}</strong></h1>
            <h1>The name ID is, <strong className={style.id}>{id}</strong></h1>
        </div>

    )
    
}
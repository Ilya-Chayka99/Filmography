import './FilmListItem.css'
const  FilmListItem=({name, description,year,poster,rating,id,filmAddCom,filmAddWil,classNameC,classNameW}) => {
    return(
        <div className='card' id={id}>
            <img src={poster.url} alt='Постер'/>
            <h2>{name}</h2>
            <span>{year} | {rating.kp}</span>
            <span>{description.slice(0,100)}...</span>
            <div className="btns">
                <button onClick={filmAddCom} className={classNameC}>Просмотрено</button>
                <button onClick={filmAddWil} className={classNameW}>Смотреть позже</button>
            </div>
        </div>
    )
}

export default FilmListItem
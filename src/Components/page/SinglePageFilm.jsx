import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const SinglePageFilm = ()=>{
    const {filmId} = useParams();
    const filmSinglPage = useSelector(state => state.films.filmSinglPage[0])
    console.log(filmId)
    return(
        <>
            <div className='card' >
                <h1>{filmSinglPage.id}</h1>
                {/*<img src={poster.url} alt='Постер' />*/}
                {/*<h2>{name}</h2>*/}
                {/*<span>{year} | {rating.kp}</span>*/}
                {/*<span>{description.slice(0,100)}...</span>*/}
                {/*<div className="btns">*/}
                {/*    <button onClick={classNameC===""?filmAddCom:filmAddWil} className={classNameW}>Просмотрено</button>*/}
                {/*    <button onClick={classNameW===""?filmAddWil:filmAddCom} className={classNameC}>Смотреть позже</button>*/}
                {/*</div>*/}
            </div>
        </>
    )
}
export default SinglePageFilm;
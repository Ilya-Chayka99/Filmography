import './FilmListItem.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filmSinglePage} from "../FilmsList/filmSlice.jsx";
const  FilmListItem=({name, description,year,poster,rating,id,filmAddCom,filmAddWil,classNameC,classNameW}) => {
    const dispatch = useDispatch();
    const {films} = useSelector(state => state.films)
    const redirectToSingl=(id)=>{
        console.log(films)
        dispatch(filmSinglePage(films.filter(item=>item.id===id)));
    }
    return(
        <div className='card' id={id}>
            <Link to={`/film/${id}`}>
                <img src={poster.url} alt='Постер' onClick={()=>redirectToSingl(id)} />
            </Link>
            <h2>{name}</h2>
            <span>{year} | {rating.kp}</span>
            <span>{description.slice(0,100)}...</span>
            <div className="btns">
                <button onClick={classNameC===""?filmAddCom:filmAddWil} className={classNameW}>Просмотрено</button>
                <button onClick={classNameW===""?filmAddWil:filmAddCom} className={classNameC}>Смотреть позже</button>
            </div>
        </div>
    )
}

export default FilmListItem
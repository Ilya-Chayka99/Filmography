import {useParams} from "react-router-dom";
import './SinflePageFilm.css'
import {useGetFilmsIDQuery} from "../api/apiSlice.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Comments from "../Comments/Comments.jsx";
import {useSelector} from "react-redux";
import FilmListItem from "../FilmListItem/FilmListItem.jsx";
import {v4 as uuidv4} from "uuid";
import CommendsForm from "../Comments/CommendsForm.jsx";

const SinglePageFilm = ()=>{
    const {filmId} = useParams();
    const commends = useSelector(state => state.films.commentsFilm)
    const {
        data: film,
        isFetching,
        isLoading,
        isError
    } =useGetFilmsIDQuery({id:filmId});
    if (isLoading||isFetching) {
        return <Spinner/>;
    } else if (isError) {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }




    return(
        <>
            <div className='card' >
                <img src={film.poster.url} alt='Постер' />
                <h2>{film.name}</h2>
                <span>{film.year} | {film.rating.kp}</span>
                <span>{film.description}</span>
            </div>
            <CommendsForm id={filmId} />
            <Comments comments={commends.filter(item=>item.id===filmId)} />
        </>
    )
}
export default SinglePageFilm;
import {useParams} from "react-router-dom";
import './SinflePageFilm.css'
import {useGetFilmsIDQuery} from "../api/apiSlice.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Comments from "../Comments/Comments.jsx";

const SinglePageFilm = ()=>{
    const {filmId} = useParams();
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
            <Comments/>
        </>
    )
}
export default SinglePageFilm;
import {useParams} from "react-router-dom";
import './SinflePageFilm.css'
import {useGetFilmsIDQuery} from "../api/apiSlice.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Comments from "../Comments/Comments.jsx";
import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import CommendsForm from "../Comments/CommendsForm.jsx";

const SinglePageFilm = ()=>{
    const {filmId} = useParams();
    let commends = useSelector(state => state.films.commentsFilm)
    if(commends.length===0 && localStorage.getItem("Comments"))
            commends=(JSON.parse(localStorage.getItem("Comments")) );
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
            <img src={film.poster.url} alt='Постер' />
            <h2>{film.name}</h2>
            <span>{film.year} | {film.rating.kp}</span>
            <br/>
            <span style={{width:60}} >{film.description}</span>
            <br/>
            <br/>
            <CommendsForm id={filmId} />
            <Comments comments={commends.filter(item=>item.id===filmId)} />
        </>
    )
}
export default SinglePageFilm;
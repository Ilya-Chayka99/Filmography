import FilmListItem from "../FilmListItem/FilmListItem.jsx";
import {v4 as uuidv4} from "uuid";


const Comments = ({comments})=>{
    const renderFilmMyList = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">Коментариев пока нет</h5>
            )
        }
        return arr.map(({...props}) => {

            return (
               <>
                    <p>{props.coment.comDis}</p>
               </>
            )
        })
    }
    const elements = renderFilmMyList(comments);

    return(
        <>
            {elements}
            <button>Добавить Комментарий</button>
        </>
    )
}
export default Comments;
import './Comments.css'

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
                   <div className="comen">
                       <h2>{props.coment.comName}</h2>
                       <p>{props.coment.comDis}</p>
                       <p>Оценка: {props.coment.comRate}</p>
                   </div>

               </>
            )
        })
    }
    const elements = renderFilmMyList(comments);

    return(
        <>
            {elements}
        </>
    )
}
export default Comments;
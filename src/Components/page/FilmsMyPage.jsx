import FilmListItem from "../FilmListItem/FilmListItem.jsx";
import {v4 as uuidv4} from "uuid";
import {useSelector} from "react-redux";
import {useState} from "react";


const FilmMyPage = ()=>{
    const FilmsC = useSelector(state=>state.films.filmsComplete)
    const FilmsW = useSelector(state=>state.films.filmsWill)
    const [active,setActive] = useState("all");
    const renderFilmMyList = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">Фильмов пока нет</h5>
            )
        }
        return arr.map(({...props},i) => {
            const {id} = props
            return (
                <FilmListItem
                    key={uuidv4()}
                    {...props}
                    filmAddCom={()=>filmAddCom(arr[i])}
                    filmAddWil={()=>filmAddWil(arr[i])}
                    classNameC={FilmsC.filter(item=>item.id===id).length!==0?"com":""}
                    classNameW={FilmsW.filter(item=>item.id===id).length!==0?"will":""}
                />
            )
        })
    }
    let elements=[];
    if(active==='com'){
        elements = renderFilmMyList(FilmsC);
    }else{
        if(active==='will'){
            elements = renderFilmMyList(FilmsW);
        }else{
            elements = renderFilmMyList(FilmsW.concat(FilmsC));
        }
    }
    const smen = (tip) =>{
        setActive(tip)
    }
    return (
        <>
            <button onClick={()=>smen("com")}>Просмотренные</button>
            <button onClick={()=>smen("will")}>Буду смотреть</button>
            <button onClick={()=>smen("all")}>Все</button>
            <div className='cards'>
                {elements}
            </div>
        </>

    )
}


export default FilmMyPage;
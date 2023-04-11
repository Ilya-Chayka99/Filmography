import FilmListItem from "../FilmListItem/FilmListItem.jsx";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {filmAddWill,filmAddComplete,filmRemoveWill} from '../FilmsList/filmSlice.jsx';
import {useState} from "react";


const FilmMyPage = ()=>{
    const dispatch = useDispatch();
    let FilmsC = useSelector(state=>state.films.filmsComplete)
    let FilmsW = useSelector(state=>state.films.filmsWill)
    if(FilmsC.length===0 && FilmsW.length===0){
        if(localStorage.getItem("Will") && localStorage.getItem("Com")){
            FilmsW=(JSON.parse(localStorage.getItem("Will"))) ;
            FilmsC=(JSON.parse(localStorage.getItem("Com")) );
        }
    }
    const [active,setActive] = useState("all");
    const renderFilmMyList = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">Фильмов пока нет</h5>
            )
        }
        return arr.map(({...props}) => {
            const {id} = props
            return (
                <>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <FilmListItem
                            key={uuidv4()}
                            {...props}
                            filmAddCom={()=>dispatch(filmAddComplete(arr.filter(item=>item.id===id)[0]))}
                            filmAddWil={()=>dispatch(filmAddWill(arr.filter(item=>item.id===id)[0]))}
                            classNameC={FilmsC.filter(item=>item.id===id).length!==0?"com":""}
                            classNameW={FilmsW.filter(item=>item.id===id).length!==0?"will":""}
                        />
                        <button style={{width:100,marginLeft:80}} onClick={()=>dispatch(filmRemoveWill(id))} >Удалить</button>
                    </div>

                </>

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
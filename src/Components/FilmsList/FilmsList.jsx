import './FilmsList.css'
import {useEffect} from "react";
import Spinner from "../Spinner/Spinner.jsx";
import {useDispatch,useSelector} from 'react-redux'
import {filmAddWill, fetchFilms,filmAddComplete} from './filmSlice.jsx';
import FilmListItem from '../FilmListItem/FilmListItem.jsx'
import { v4 as uuidv4 } from 'uuid'


const FilmsList = () => {
  const dispatch = useDispatch();
  const Films = useSelector(state => state.films.filmsFiltr);
  const FilmsC = useSelector(state => state.films.filmsComplete);
  const FilmsW = useSelector(state => state.films.filmsWill);
  const heroesLoadingStatus = useSelector(state => state.films.filmsLoadingStatus);

  useEffect(() => {
    dispatch(fetchFilms())
  }, [])

  if (heroesLoadingStatus === "loading") {
    return <Spinner/>;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }
  const filmAddCom = (id)=>{
    dispatch(filmAddComplete(id));
  }
  const filmAddWil = (id)=>{
    dispatch(filmAddWill(id));
  }
  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return (
          <h5 className="text-center mt-5">Фильмов пока нет</h5>
      )
    }
    return arr.map(({id,...props}) => {
      return (
          <FilmListItem
              key={uuidv4()}
              {...props} filmAddCom={()=>filmAddCom(id)}
              filmAddWil={()=>filmAddWil(id)}
              classNameC={FilmsC.includes(id)?"com":""}
              classNameW={FilmsW.includes(id)?"will":""}
          />
      )
    })
  }

  const elements = renderHeroesList(Films);
  return (
      <div className='cards'>
        {elements}
      </div>
  )
}

export default FilmsList;
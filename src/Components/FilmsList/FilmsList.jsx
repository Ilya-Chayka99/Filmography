import './FilmsList.css'
import {useGetFilmsQuery} from "../api/apiSlice.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import {useDispatch,useSelector} from 'react-redux'
import {filmAddWill,filmAddComplete,filmLoad} from './filmSlice.jsx';
import FilmListItem from '../FilmListItem/FilmListItem.jsx'
import { v4 as uuidv4 } from 'uuid'
import {useEffect} from "react";

const FilmsList = () => {
  const dispatch = useDispatch();
  const Films = useSelector(state => state.films.filmsFiltr);
  const FilmsC = useSelector(state => state.films.filmsComplete);
  const FilmsW = useSelector(state => state.films.filmsWill);
  const {
    data: films=[],
      isFetching,
      isLoading,
      isError
  } =useGetFilmsQuery();
  if (isLoading||isFetching) {
    return <Spinner/>;
  } else if (isError) {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }
  const filmAddCom = (id)=>{
    dispatch(filmAddComplete(id));
  }
  const filmAddWil = (id)=>{
    dispatch(filmAddWill(id));
  }
  const renderFilmsList = (arr) => {
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
  const elements = renderFilmsList(Films);
  return (
      <div className='cards'>
        {elements}
      </div>
  )
}
export default FilmsList;
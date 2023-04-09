import './FilmsList.css'
import {useEffect, useState} from "react";
import Spinner from "../Spinner/Spinner.jsx";
import {useDispatch,useSelector} from 'react-redux'
import {filmDeleted, fetchFilms} from './filmSlice.jsx';
import FilmListItem from '../FilmListItem/FilmListItem.jsx'
const FilmsList = () => {
  const dispatch = useDispatch();
  const filteredFilms = useSelector(state => state.films.films);
  const heroesLoadingStatus = useSelector(state => state.films.filmsLoadingStatus);

  useEffect(() => {
    dispatch(fetchFilms())
  }, [])

  if (heroesLoadingStatus === "loading") {
    return <Spinner/>;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }
  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return (
          <div>
            classNames="hero">
            <h5 className="text-center mt-5">Героев пока нет</h5>
          </div>
      )
    }

    return arr.map(({id, ...props}) => {
      return (
          <div key={id} className="hero">
            <FilmListItem  {...props}/>
          </div>
      )
    })
  }

  const elements = renderHeroesList(filteredFilms);
  return (
      <div>
        {elements}
      </div>

  )

}


export default FilmsList;
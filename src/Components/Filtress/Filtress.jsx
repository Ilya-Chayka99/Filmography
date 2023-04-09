import './Filtress.css'
import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid'
import {useDispatch,useSelector} from 'react-redux'
import {filmFiltor} from "../FilmsList/filmSlice.jsx";

const dispatch = useDispatch();

const Filtress = () => {
    const [filmName, setFilmName] = useState('');
    const [filmDer, setFilmDer] = useState('');
    const [filmYear, setFilmYear] = useState('');
    const [filmRate, setFilmRate] = useState('');
    useEffect(()=>{
        dispatch(filmFiltor({name:"sss"}))
    },[])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setFilmName('');
        setFilmDer('');
        setFilmYear('');
        setFilmRate('');
    }


    return (
        <div>
            <div className="filtr">
                <h2>Сортировка</h2>
                <div className="btnfil">
                    <button id="abz">По алфавиту</button>
                    <br/>
                    <button id="rateOtz">По оценки отзыва</button>
                    <br/>
                    <button id="date">По дате добавления</button>
                </div>
            </div>
            <br/>
            <form id="fo" onSubmit={onSubmitHandler}>
                <div className='inp'>
                    <label>
                        Название:
                        <input type="text" name="title" value={filmName} onChange={(e) => setFilmName(e.target.value)}/>
                    </label>
                    <label>
                        Год выпуска:
                        <input type="number" name="year" value={filmYear} onChange={(e) => setFilmYear(e.target.value)}/>
                    </label>
                    <label>
                        Режиссер:
                        <input type="text" name="director" value={filmDer} onChange={(e) => setFilmDer(e.target.value)}/>
                    </label>
                    <label>
                        Рэйтинг:
                        <input type="number" name="rate" value={filmRate} onChange={(e) => setFilmRate(e.target.value)}/>
                    </label>
                </div>
                <br/>
                <button type='submit' className='btn'>Фильтровать</button>
                <button type="reset">Очистить</button>
            </form>

        </div>
    )
}

export default Filtress;
import './Filtress.css'
import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid'
import {useDispatch,useSelector} from 'react-redux'
import {filmFiltor,filmSortAB,filmSortRete,filmSortYearN,filmSortYearL} from "../FilmsList/filmSlice.jsx";



const Filtress = () => {
    const dispatch = useDispatch();
    const [filmName, setFilmName] = useState('');
    const [filmYear, setFilmYear] = useState('');
    const [filmRate, setFilmRate] = useState('');

    const onSubmitHandler = (e) => {
        console.log(e.target.title.value)
        e.preventDefault();
        dispatch(filmFiltor({name:filmName,year:filmYear,rate:filmRate}))
        setFilmName('');
        setFilmYear('');
        setFilmRate('');
    }
    const reset = ()=>{
        setFilmName('');
        setFilmYear('');
        setFilmRate('');
    }
    return (
        <div>
            <div className="filtr">
                <h2>Сортировка</h2>
                <div className="btnfil">
                    <button id="abz" onClick={()=>dispatch(filmSortAB())}>По алфавиту</button>
                    <br/>
                    <button id="rateOtz" onClick={()=>dispatch(filmSortRete())}>По оценки на кинопоиске</button>
                    <br/>
                    <button id="date" onClick={()=>dispatch(filmSortYearN())} >По году релиза(сначала новые)</button>
                    <br/>
                    <button id="date" onClick={()=>dispatch(filmSortYearL())} >По году релиза(сначала старые)</button>
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
                        Рэйтинг:
                        <input type="number" name="rate" value={filmRate} onChange={(e) => setFilmRate(e.target.value)}/>
                    </label>
                </div>
                <br/>
                <button type='submit' className='btn'>Фильтровать</button>
                <button type="reset" onClick={reset}>Очистить</button>
            </form>

        </div>
    )
}

export default Filtress;
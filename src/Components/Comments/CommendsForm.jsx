import {useDispatch} from "react-redux";
import {useState} from "react";
import {filmLoadComments} from "../FilmsList/filmSlice.jsx";


const CommendsForm = ({id})=>{

    const dispatch = useDispatch();
    const [comName, setComName] = useState('');
    const [comDis, setComDis] = useState('');
    const [comRate, setComRate] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(filmLoadComments({id:id,coment:{comName,comDis,comRate}}))
        setComName('');
        setComDis('');
        setComRate('');
    }
    const reset = ()=>{
        setComName('');
        setComDis('');
        setComRate('');
    }
    return (
        <div>
            <form id="fo" onSubmit={onSubmitHandler}>
                <div className='inp'>
                    <label>
                        Название коммнтария:
                        <input type="text" name="title" value={comName} onChange={(e) => setComName(e.target.value)}/>
                    </label>
                    <label>
                        Описание:
                        <input type="text" name="director" value={comDis} onChange={(e) => setComDis(e.target.value)}/>
                    </label>
                    <label>
                        Укажите рейтинг:
                        <input type="number" name="rate" value={comRate} onChange={(e) => setComRate(e.target.value)}/>
                    </label>
                </div>
                <br/>
                <button type='submit' className='btn'>Опубликовать</button>
                <button type="reset" onClick={reset}>Очистить</button>
            </form>

        </div>
    )
}
export default CommendsForm;
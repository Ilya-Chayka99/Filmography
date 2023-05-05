import './AppHeader.css'
import logo from '../../Components/appHeder/img/logo1.svg'
import {Link,NavLink} from "react-router-dom";
import {useGetFQuery} from "../api/apiTest.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import {useHttp} from "../hook/http.hook.jsx"
import {useState} from "react";

const AppHeader = () => {
    const [Name, setName] = useState('');
    const [Zap, setZap] = useState('');

    const {
        data: dd,
        isFetching,
        isLoading,
        isError
    } =useGetFQuery(Zap);
    if (isLoading||isFetching) {
        return <h5 className="text-center mt-5">zzz</h5>;
    } else if (isError) {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }
   const onSubmitHandler=(e)=>{
       e.preventDefault();
        setZap(Name)
    }
    return(
        <header className="hed">
            {/*<img src={logo} alt="logo" className="logo"/>*/}
            <nav className="appMenu">
                <ul>
                    <li>
                        <NavLink end style={({isActive})=>({color:isActive?'green':'white'})} to="/" className="nav">{dd.message}</NavLink>
                    </li>
                    <li>
                        <NavLink  style={({isActive})=>({color:isActive?'green':'white'})} to="/films" className="nav">Свои фильмы</NavLink>
                    </li>
                    <form id="fo" onSubmit={onSubmitHandler}>
                        <input type="text" name="zap"  value={Name} onChange={(e) => setName(e.target.value)}/>
                        <button type="submit">123regertg</button>
                    </form>
                </ul>
            </nav>
        </header>

    )


}

export default AppHeader;
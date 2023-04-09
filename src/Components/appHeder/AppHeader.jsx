import './AppHeader.css'
import logo from '../../Components/appHeder/img/logo1.svg'
import {Link,NavLink} from "react-router-dom";

const AppHeader = () => {

    return(
        <header className="hed">
            {/*<img src={logo} alt="logo" className="logo"/>*/}
            <nav className="appMenu">
                <ul>
                    <li>
                        <NavLink end style={({isActive})=>({color:isActive?'green':'white'})} to="/" className="nav">Фильмы</NavLink>
                    </li>
                    <li>
                        <NavLink end style={({isActive})=>({color:isActive?'green':'white'})} to="/2" className="nav">Свои фильмы</NavLink>
                    </li>

                </ul>
            </nav>
        </header>

    )


}

export default AppHeader;
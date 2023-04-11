
import { Route, Routes} from "react-router-dom";
import './App.css'
import AppHeader from "./Components/appHeder/AppHeader.jsx";
import MainPage from "./Components/page/MainPage.jsx";
import SinglePageFilm from "./Components/page/SinglePageFilm.jsx";
import FilmsMyPage from "./Components/page/FilmsMyPage.jsx";
function App() {
  return (
          <main className="App">
              <AppHeader/>

              <Routes>
                  <Route path='/' element={<MainPage/>} />
                  <Route path='/film/:filmId' element={<SinglePageFilm/>} />
                  <Route path='/films' element={<FilmsMyPage/>}/>
              </Routes>

          </main>


  )
}

export default App

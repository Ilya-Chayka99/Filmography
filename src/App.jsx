
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css'
import AppHeader from "./Components/appHeder/AppHeader.jsx";
import FilmsList from "./Components/FilmsList/FilmsList.jsx";
import Filtress from "./Components/Filtress/Filtress.jsx";
function App() {
  return (
      <Router>
          <main className="App">
              <AppHeader/>
              <section>
                  <Filtress/>
                  <FilmsList/>
              </section>

          </main>
      </Router>

  )
}

export default App

import { useState } from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css'
import AppHeader from "./Components/appHeder/AppHeader.jsx";
import FilmsList from "./Components/FilmsList/FilmsList.jsx";
function App() {
  // const [count, setCount] = useState(0)
  return (
      <Router>
          <div className="App">
              <AppHeader/>
              {/*<FilmsList/>*/}
              {/*<h1>Vite + React</h1>*/}
              {/*<div className="card">*/}
              {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
              {/*        count is {count}*/}
              {/*    </button>*/}
              {/*    <p>*/}
              {/*        Edit <code>src/App.jsx</code> and save to test HMR*/}
              {/*    </p>*/}
              {/*</div>*/}
              {/*<p className="read-the-docs">*/}
              {/*    Click on the Vite and React logos to learn more*/}
              {/*</p>*/}
          </div>
      </Router>

  )
}

export default App

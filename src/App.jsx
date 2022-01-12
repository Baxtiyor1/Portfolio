import { Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound  from "./Components/404/notfound";
import Contact from "./Components/Contact/contact";
import About from "./Components/About/about";
import Portfolio from "./Components/Portfolio/portfolio";

//SASS
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/about' element={< About />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/portfolio' element={< Portfolio />} />
        <Route path='*' element={< NotFound />} />
      </Routes>

    </>
  )
}

export default App;

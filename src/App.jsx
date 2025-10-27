import { useState } from "react";
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MovieList from './Components/MovieList/MovieList';
import Sidebar from './Components/Sidebar/Sidebar';
import { movieContext } from './Contexts/Context';
function App() {


  const [cardData, setCardData] = useState([]);


  return (
    <>
      <movieContext.Provider value={{ cardData, setCardData }}>
        <div className="dark:bg-body   font-[Sora]   text-dark">
          <Header />
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </div>
      </movieContext.Provider>

      <Footer />

    </>
  )
}

export default App

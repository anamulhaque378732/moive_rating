import { useReducer, useState } from "react";
import './App.css';
import { MovieContext, ThemeContext } from './Contexts/Context';
import Page from "./Page/Page";
import { cardReducer, initialState } from "./Reducer/Reducer";

import { ToastContainer } from 'react-toastify';




function App() {


  // const [cardData, setCardData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);
  const [state, dispatch] = useReducer(cardReducer, initialState);


  return (
    <>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>

        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>

      </ThemeContext.Provider>



    </>
  )
}

export default App

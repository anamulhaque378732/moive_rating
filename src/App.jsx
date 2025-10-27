import { useReducer, useState } from "react";
import './App.css';
import { movieContext, themeContext } from './Contexts/Context';
import Page from "./Page/Page";
import { cardReducer, initialState } from "./Reducer/Reducer";

import { ToastContainer } from 'react-toastify';




function App() {


  // const [cardData, setCardData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);
  const [state, dispatch] = useReducer(cardReducer, initialState);


  return (
    <>
      <themeContext.Provider value={{ darkMood, setDarkMood }}>

        <movieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </movieContext.Provider>

      </themeContext.Provider>



    </>
  )
}

export default App

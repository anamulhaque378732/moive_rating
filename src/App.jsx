import { useState } from "react";
import './App.css';
import { movieContext, themeContext } from './Contexts/Context';
import Page from "./Page/Page";
function App() {


  const [cardData, setCardData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);

  return (
    <>
      <themeContext.Provider value={{ darkMood, setDarkMood }}>

        <movieContext.Provider value={{ cardData, setCardData }}>
          <Page></Page>

        </movieContext.Provider>

      </themeContext.Provider>



    </>
  )
}

export default App

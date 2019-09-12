import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import styled from "styled-components";

import Title from './title';
import Date from './date';
import Explanation from './explanation';
import Media from './media';


const NavContainer = styled.div `
  border: 2px solid black;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 18rem;
`

const SiteLogo = styled.img `
  height: 100%;
` 

const MainContent = styled.div `
  text-align: center;
  h1 {
    margin: 3rem;
    color: orange;
  }
  img {
    border: 3px solid grey;
    margin-bottom: 3rem;
  }
`

const Info = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6rem;
  width: 80%;
  h1 {
    color: orange;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  h2 {
    width: 100%;
    display: flex;
    justify-content: center;

  }
`

function App() {

  const [space, setSpace] = useState();
  let title = null;
  let date = null;
  let explanation = null;
  let url = null;

  if(space) {
    title = space.title;
    date = space.date;
    explanation = space.explanation;
    url = space.url;
  }

  useEffect ( () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=7mmPbQrKGKAF5XvwbI6dXpWsz8jZCF81jwR7pTQ6")
      .then(result => {
        setSpace(result.data)
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }, [] );

  return (
    <div className="App">
      <div className="App-header">
        <NavContainer>
          <SiteLogo src="https://extensions.gnome.org/extension-data/icons/icon_1202_tSsgGqQ.png"></SiteLogo>
          <h1>Picture of the Day</h1>
        </NavContainer>
        
        <MainContent>
          <Date date = {date}/>
          <Media url = {url}/>
        </MainContent>

        <Info>
          <Title title = {title}/>
          <Explanation explanation = {explanation}/>
        </Info>
        
      </div>
    </div>
  );
}

export default App;

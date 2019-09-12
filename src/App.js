import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import Title from './title';
import Date from './date';
import Explanation from './explanation';
import Media from './media';


function App() {

  const [space, setSpace] = useState();
  let title = null;
  let date = null;
  let explanation = null;
  let url = null;


  useEffect ( () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(result => {
        setSpace(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [] );

  if(space) {
    title = space.title;
    date = space.date;
    explanation = space.explanation;
    url = space.url;
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Nasa Picture of the Day</h1>
        <Title title = {title}/>
        <Date date = {date}/>
        <Media url = {url}/>
        <Explanation explanation = {explanation}/>
      </div>
    </div>
  );
}

export default App;

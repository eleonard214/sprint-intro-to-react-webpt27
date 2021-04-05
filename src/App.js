import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character'
import SearchText from './components/searchText'
import styled from 'styled-components'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData]=useState([])
  

  const styledDiv = styled.div`
    background-color:orange;
    font-size: 25px;
    color: purple;`

  useEffect(()=>{
    function callData(){
      axios
        .get("https://swapi.dev/api/people")
        .then(res=>{
          console.log(res.data)
          setData(res.data.results)
        })
    }
    callData()
  },[choice])

  return (
    <styledDiv className="App">
      <h1 className="Header">Star Wars Characters</h1>
    </styledDiv>
  );
}

export default App;

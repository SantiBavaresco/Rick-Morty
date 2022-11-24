import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import NavSeachBar from './components/Nav';
//import SearchBar from './components/SearchBar.jsx'
//import characters from './data.js'
import React from "react";
//import {useState} from "react"; //desestructurar, es lo mismo que react.useState()
import styles from './modules/Bienvenido.module.css';

function App () {
  // const characters = [];
  
  const [characters, setCharacters] = React.useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id));
  }
  return (
    //<div className='App' style={{ padding: '25px' }}>
    <div  className={styles.body}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' style={{height: 100}}/> 
              { /*
                <div className={styles.card}>
                  <Card
                    name={Rick.name}
                    species={Rick.species}
                    gender={Rick.gender}
                    image={Rick.image}
                    onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
                </div>
            */}
      <hr />
        <NavSeachBar onSearch={onSearch}/>
      <hr />
        <div >
          {/* <ul> */}
          <Cards 
            characters={characters} onClose={onClose}
          />
          {/* </ul> */}
        </div>
      <hr /> 
      {/* 
        <div>
           <SearchBar 
            onSearch={(characterID) => window.alert(characterID)}
          />
        </div>
      */}
    </div>
  )
}

export default App

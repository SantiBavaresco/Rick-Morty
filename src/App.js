import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import NavSeachBar from './components/Nav';
import About from './components/About.jsx';
import Detail from './components/Detail';
//import SearchBar from './components/SearchBar.jsx'
//import characters from './data.js'
import React from "react";
import {Routes, Route} from 'react-router-dom';

//import {useState} from "react"; //desestructurar, es lo mismo que react.useState()
import styles from './modules/Bienvenido.module.css';

function App () {
  const [characters, setCharacters] = React.useState([]);
   
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
                
        const checkUsername = obj => obj.name === data.name; //comprobar si el personaje con data.name existe en el objeto

          if ((data.name) && !(characters.some(checkUsername))) {
             setCharacters((oldChars) => [...oldChars, data]);    
          } 
          // si esta repetido en pj tirar este error
          else if(characters.some(checkUsername)){ window.alert('Ya existe ese personaje');}
          else {
             window.alert('No hay personajes con ese ID');
          }
        
       });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id));
  }
  
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
    //   <hr />
    //     <NavSeachBar onSearch={onSearch}/>
    //   <hr />
    //     <div >
    //       {/* <ul> */}
          
    //       {/* </ul> */}
    //     </div>
    //   <hr /> 
    //   {/* 
    //     <div>
    //        <SearchBar 
    //         onSearch={(characterID) => window.alert(characterID)}
    //       />
    //     </div>
    //   */}
    // </div>

    // hay que aplicar los anterior a esto nuevo :D
  return (  
        <div className='App' style={{ padding: '15px' }}>
          <div  className={styles.body}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' style={{height: 100}}/> 
            {/* <hr />
              
            <hr /> */}
            
          <NavSeachBar onSearch={onSearch}/>
          <Routes>
             <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
             <Route path="/about" element={<About/>}/>
            <Route path="/detail/:detailId" element={<Detail/>}/>
          </Routes> 
        </div>
        </div>
           
  
  );
}

export default App


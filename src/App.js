import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import NavSeachBar from './components/Nav';
import About from './components/About.jsx';
import Detail from './components/Detail';
import Form from './components/Form';
import Error404 from './components/Error404';
import Favorites from './components/Favorites';
//import SearchBar from './components/SearchBar.jsx'
//import characters from './data.js'
import React from "react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

//import {useState} from "react"; //desestructurar, es lo mismo que react.useState()
import styles from './modules/Bienvenido.module.css';

//------------------------------------------------------------------------------------------------
function App () {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
//------------------------------------------------------------------------------------------------
  const userName = "admin@admin.com"
  const password = "admin1234";
  const [access, setAccess] = useState(false);

  // useEffect(() => {
  //   !access && navigate('/');
  // }, [access]);

  function login(userData) { 
    if (userData.password === password && userData.username === userName) {
       setAccess(true);
       navigate('/home');
    }
    else alert("El usuario/contraseña no es correcta.");
  }
  

  
//------------------------------------------------------------------------------------------------------
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
  const locaciones = ["/","/home","/about","/detail/:detailId"];
  //--------BODY------------------------------------------------------------------------------------------------------------
  return (  
        <div className='App' style={{ padding: '15px' }}>
          <div  className={styles.body}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' style={{height: 100}}/> 
            {/* <hr />
            <hr /> */}

          {location.pathname === "/" ? null :  <NavSeachBar onSearch={onSearch}/> }  
          {/* <NavSeachBar onSearch={onSearch}/> */}
          <Routes>
             <Route path="/" element={<Form Login={login}/>}/>
             <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/favorites" element={<Favorites/>}/>
             <Route path="/detail/:detailId" element={<Detail/>}/>
             <Route path=":404" element={<Error404/>}/>
          </Routes> 
        </div>
        </div>
           
  
  );
}

export default App


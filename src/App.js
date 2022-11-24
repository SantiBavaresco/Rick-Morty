import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import NavSeachBar from './components/Nav';
//import SearchBar from './components/SearchBar.jsx'
//import characters from './data.js'
import React,{useState} from "react";
import styles from './modules/Bienvenido.module.css';

function App () {
  // const characters = [];
  
  const [characters, setCharacters] = useState([]);

  const onSearch = (valor) => {
    const example = {
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };
    //if(valor === example.name)
      setCharacters([
        ...characters,example //diana genia
      ]);
  };
  
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
            characters={characters}
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

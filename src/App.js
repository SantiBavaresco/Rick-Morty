import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'
import styles from './modules/Bienvenido.module.css';

function App () {
  return (
    //<div className='App' style={{ padding: '25px' }}>
    
    <div  className={styles.body}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' style={{height: 100}}/> 
      
              { /*
                <div className={styles.divBienvenido}>
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
        <div >
          <ul>
          <Cards 
            characters={characters}
          />
          </ul>
        </div>
      <hr />
        <div>
          <SearchBar 
            onSearch={(characterID) => window.alert(characterID)}
          />
        </div>
    </div>
  )
}

export default App

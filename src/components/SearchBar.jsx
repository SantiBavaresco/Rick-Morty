import styles from '../modules/Bienvenido.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const {onSearch} = props;
   const [userInput, setUserInput] = useState("");

   //const handleFormValueChange = (evento) => setUserInput(evento.target.value);
   function handleChange(evento){
      // cuando ocurra un cambio en el valuue del input,
      // tomar ese value y guardarlo en el estado del userInput
      setUserInput(evento.target.value);
   }
   function clearInput() { 
      setUserInput("");
   }
   
   
   return (
      <div className={styles.searchBar}> 
         <input type='search' value={userInput} onChange={handleChange} 
            //onSubmit={() => clearInput()}
            />
         <button onClick={() => {onSearch(userInput); clearInput() }} className={styles.button}
            
            >
            Agregar</button> 
      </div>
   );
}

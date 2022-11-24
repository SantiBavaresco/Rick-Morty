import styles from '../modules/Bienvenido.module.css';
import React,{useState} from "react";

export default function SearchBar(props) {
   //const {onSearch} = props;
   const [variable, setVariable] = useState("");
   //const [characters, setCharacters] = useState([]);
   const handleChange = (valor) => {
      setVariable(valor.targer.value);      
   }

   return (
      <div className={styles.searchBar}> 
         <input type='search' onChange={handleChange}/>
         <button onClick={ () => props.onSearch(variable) } 
            className={styles.button}>
            Agregar</button> 
      </div>
   );
}

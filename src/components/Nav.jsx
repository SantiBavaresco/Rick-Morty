import SearchBar from './SearchBar.jsx';
import styles from '../modules/Bienvenido.module.css';
import Titulo from "../img/Rick-and-Morty.png";
import { Link } from 'react-router-dom';

export default function NavSeachBar(props) {
   const {onSearch} = props;

   return (
      <div className={styles.divBienvenido} >
         {/* <img src={Titulo} style={{height: 100}}/> */}
         <span style={{display:"flex", justifyContent: "right", alignItems: "center"}}>

            <Link to={"/home"}>
               <img src={Titulo} style={{height: 100}}/>
               {/* <button className={styles.button} >Home </button> */}
            </Link>
        
            <Link to={"/favorites"}>
               <button className={styles.button} 
               style={{backgroundColor: "#FA4343"}}
               >Favorites </button>
            </Link>

            <Link to={"/about"}>
               <button className={styles.button} >About </button>
            </Link>
            
         </span>
         <span className={styles.nave} >
            <SearchBar onSearch={onSearch} /> 
         </span>
      </div>
      
   )
}
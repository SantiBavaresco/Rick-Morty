import SearchBar from './SearchBar.jsx';
import styles from '../modules/Bienvenido.module.css';
import { Link } from 'react-router-dom';

export default function NavSeachBar(props) {
   const {onSearch} = props;

   return (
      <div>
         <Link to={"/home"}>
          <button className={styles.button} >Home </button>
         </Link>
         <Link to={"/favorites"}>
          <button className={styles.button} >Favorites </button>
         </Link>
         <Link to={"/about"}>
          <button className={styles.button} >About </button>
         </Link>
         <span><SearchBar onSearch={onSearch} /> </span>
      </div>
      
   )
}
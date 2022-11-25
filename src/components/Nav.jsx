import SearchBar from './SearchBar.jsx';
import styles from '../modules/Bienvenido.module.css';
import { Link } from 'react-router-dom';

export default function NavSeachBar(props) {
   const {onSearch} = props;
   return (
      <nav > 
         <Link to={"/home"}>
          <span>Home </span>
        </Link>
        <Link to={"/about"}>
          <span>About </span>
        </Link>
        <SearchBar onSearch={onSearch}
            //onSearch={(characterID) => window.alert(characterID)}
          />
      </nav>
   );
}
import SearchBar from './SearchBar.jsx';
import styles from '../modules/Bienvenido.module.css';

export default function NavSeachBar(props) {
   const {onSearch} = props;
   return (
      <nav > 
        <span>
         <SearchBar onSearch={onSearch}
            //onSearch={(characterID) => window.alert(characterID)}
          />
        </span>
      </nav>
   );
}
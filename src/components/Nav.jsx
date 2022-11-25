import SearchBar from './SearchBar.jsx';
import styles from '../modules/Bienvenido.module.css';

export default function NavSeachBar(props) {
   //const {onSearch} = props;
   return (
        // <SearchBar onSearch={props.onSearch} />
     
      <nav > 
        <span>
         <SearchBar onSearch={props.onSearch}
            //onSearch={(characterID) => window.alert(characterID)}
          />
        </span>
      </nav>
   );
}
import styles from '../modules/Bienvenido.module.css';

export default function SearchBar(props) {
   const {onSearch} = props;
   return (
      <div className={styles.searchBar}> 
         <input type='search'  />
         <button onClick={onSearch}
            className={styles.button}>
            Agregar</button> 
      </div>
   );
}

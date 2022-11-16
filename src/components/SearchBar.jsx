import styles from '../modules/Bienvenido.module.css';

export default function SearchBar(props) {
   const {onSearch} = props;
   return (
      <div className={styles.subtitle}> 
         <input type='search' />
         <button onClick={()=>onSearch("Futuro ID del pj")}
            className={styles.button}>
            Agregar</button> 
      </div>
   );
}

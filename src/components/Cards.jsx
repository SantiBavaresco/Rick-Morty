import Card from './Card';
import styles from '../modules/Bienvenido.module.css';


export default function Cards(props) {
   const { characters } = props;
   return <ul className={styles.unorderedList}>
      {
         characters.map(char => <Card
         key={char.name}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClick={()=>alert('Emulamos que se cierra la card')}
         /> )
      }
   </ul>;
}

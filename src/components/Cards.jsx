import Card from './Card';
import styles from '../modules/Bienvenido.module.css';


export default function Cards(props) {
   const { characters, onClose } = props;
  // console.log(characters);
   return (
      <div>
         {/* <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div> */}
      
   <ul className={styles.unorderedList}>
      {
         
         characters.map((char) => 
         <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClick={()=> onClose(char.id) }
         /> )
      }
   </ul>
   </div>
   );
}

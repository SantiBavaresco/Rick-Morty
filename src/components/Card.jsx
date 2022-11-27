import styles from '../modules/Bienvenido.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   //console.log(props);
   return (
      <div className={styles.card}>
        <div>
         <button className={styles.xbutton} onClick={props.onClick}  >  {/* onClick={ () => props.onClose(props.id)} */}
            <img  src="https://i.pinimg.com/originals/78/a9/6d/78a96d96ffa60a4477d0f17e9bd55a36.png" alt={props.name} />
         </button>
         </div> 
         <img  src={props.image} alt={props.name}></img>
         {/* <h6>{props.id}</h6> */}
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.subtitle}>{props.name}</h2>
         </Link>
         <h2 className={styles.subtitle}>{props.species}</h2>
         <h2 className={styles.subtitle}>{props.gender}</h2>
          
      </div>
   );
}

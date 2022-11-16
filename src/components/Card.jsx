import styles from '../modules/Bienvenido.module.css';
export default function Card(props) {
   //console.log(props);
   return (
      <div className={styles.card}>
         
         <button className={styles.xbutton} onClick={props.onClick}> <img  src="https://i.pinimg.com/originals/78/a9/6d/78a96d96ffa60a4477d0f17e9bd55a36.png" alt={props.name} /></button>
         
         <h2 className={styles.subtitle}>{props.name}</h2>
         <h2 className={styles.subtitle}>{props.species}</h2>
         <h2 className={styles.subtitle}>{props.gender}</h2>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}

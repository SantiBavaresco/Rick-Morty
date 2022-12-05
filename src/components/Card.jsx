import styles from '../modules/Bienvenido.module.css';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from "../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card(props) {
   //console.log(props);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite(){ // mostrar si ese character es favorito.
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(props.id);
      }
      else {
         setIsFav(true);
         props.addFavorite(props);
      }
   }
   return (
      <div className={styles.card}>
         <div>
            {isFav ? (<button onClick={handleFavorite} className={styles.xbutton}><img src="https://i.ibb.co/X77shXs/1.jpg" alt="1" border="0"/>
               </button>) : (
               <button onClick={handleFavorite} className={styles.xbutton}>
                <img src="https://i.ibb.co/80dvVCJ/2.jpg" alt="2" border="0"/>
               </button>)}
            <button className={styles.xbutton} onClick={props.onClick}  >  {/* onClick={ () => props.onClose(props.id)} */}
               <img  src="https://i.pinimg.com/originals/78/a9/6d/78a96d96ffa60a4477d0f17e9bd55a36.png" alt={props.name} />
            </button>
            
         </div> 
         <img  src={props.image} alt={props.name}></img>
         {/* <h6>{props.id}</h6> */}
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.subtitle}>{props.name}</h2>
         </Link>
         {/* <h2 className={styles.subtitle}>{props.species}</h2>
         <h2 className={styles.subtitle}>{props.gender}</h2> */}
          
      </div>
   );
}
export function mapDispatchToProps(dispatch){
   return {
      addFavorite: (id) => { dispatch(addFavorite(id)) },
      deleteFavorite: (id) => { dispatch(deleteFavorite(id)) }
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

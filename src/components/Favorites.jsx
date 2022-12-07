import CardFav from './CardFav';
import PepinilloRick from "../img/x.png";
import styles from '../modules/Bienvenido.module.css';
import {connect} from "react-redux";

function Favorites({myFavorites}){

    return(
        <ul className={styles.unorderedList}>
            {console.log(myFavorites)}
            
        
            { 
            myFavorites.length>0 ? myFavorites.map((char) => (
                <CardFav
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    species={char.species}
                    gender={char.gender}
                    image={char.image}
                    // onClick={()=> onClose(char.id) }
                /> 
                // <div className={styles.card}>
                //     <h2 lassName={styles.subtitle}>{char.name}</h2>
                //     <img  src={char.image} alt={char.name} style={{marginTop: "2%", marginBottom: "2%"}}></img>
                // </div>
                )       
            ) : 
            <span className={styles.about}>No hay favoritos que mostrar</span>
        
        }
        </ul>
    )
}

// para conectarme al estado global.
function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}
// connect le pasa al estado global "mapStateToProps", y 
// retorna un objeto del estado global y se la pasa a "Favorites"
export default connect(mapStateToProps)(Favorites);
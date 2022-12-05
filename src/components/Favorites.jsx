import Card from './Card';
import styles from '../modules/Bienvenido.module.css';
import {connect} from "react-redux";

function Favorites({myFavorites}){

    return(
        <ul className={styles.unorderedList}>
            {/* <h1>Favorites</h1> */}
            {myFavorites.map((char) => (
                <div className={styles.card}>
                    <h2 lassName={styles.subtitle}>{char.name}</h2>
                    <img  src={char.image} alt={char.name} style={{marginTop: "2%", marginBottom: "2%"}}></img>
                </div>
                )       
            )}
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
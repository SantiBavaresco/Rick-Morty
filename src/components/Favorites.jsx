import CardFav from './CardFav';
import PepinilloRick from "../img/x.png";
import styles from '../modules/Bienvenido.module.css';
import { NavLink } from 'react-router-dom';
import { filterCards, orderCards } from "../redux/actions.js";
import {connect, useDispatch} from "react-redux";

function Favorites({myFavorites}){
    const arrayGender = ['All','Male', 'Female', 'unknown', 'Genderless'];
    const disGender =  useDispatch();

    function handleChangeOrder(evento){
        // cuando ocurra un cambio en el valuue del input,
        // tomar ese value y guardarlo en el estado del userInput
        disGender(orderCards(evento.target.value))
       // setUserInput(evento.target.value);
     }
    function handleChangeFilter(evento){
        // cuando ocurra un cambio en el valuue del input,
        // tomar ese value y guardarlo en el estado del userInput
        disGender(filterCards(evento.target.value))
       // setUserInput(evento.target.value);
    } 

    return(
        <div style={{width: "100%", margin:"auto"}}>
             <select id="ordenamiento" onClick={handleChangeOrder}>
                <option value="Ascendente" >Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select id="genero" style={{marginLeft: "10px"}}
                onClick={handleChangeFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="unknown">unknown</option>
                <option value="Genderless">Genderless</option>
            </select>
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
        </div>
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
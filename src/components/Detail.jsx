import styles from '../modules/Bienvenido.module.css';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail(){
    const { detailId } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });

        return setCharacter({}); // esta linea resetea el estado a vacio
     }, [detailId]);
// style={{height: "30%"}}
     return(
         <div className={styles.about} style={{ width: "70%",height: "90%", margin:"auto"}}>
            {character ?( // se coloca este ternario, tiene que ver con las promesas, se ve mas adelante.
            <div  >
            {/* ----- INFORMACION DETAIL ----- */}
               <div style={{
                  width: "85%",height: "54vh", margin:"auto",
                  marginTop: "2%", marginBottom: "3%", marginRight: "5%", marginLeft: "9%"}}>
                  {/* ----- TEXTO DETAIL ----- */}
                  <div style={{float: "left", marginLeft: "40px"}}>
                     <p className={styles.subtitle}>
                     <h3>NOMBRE: </h3>
                     <h3>{character.name}</h3>
                     <h3>STATUS: {character.status}</h3>
                     <h3>ESPECIE: {character.species}</h3>
                     <h3>GENERO: {character.gender} </h3>
                     <h3>ORIGEN: </h3>
                     <h3>{character.origin?.name}</h3>
                     </p>
                  </div>
                  {/* ----- IMG DETAIL ----- */}
                     <img src={character.image} alt={character.name} 
                     style={{height: "25vw", marginRight: "5%", marginTop: "3%"
                           
                           }} />
                  {/* ----- BUTTON VOLVER ----- */}
                 <div>
                   <button onClick={()=>navigate("/home")} className={styles.button}
                     style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button>
               </div>
               </div>
            </div>
         ): ""}
      </div>
     );

}
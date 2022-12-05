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

     return(
         <div>
            {character ?( // se coloca este ternario, tiene que ver con las promesas, se ve mas adelante.
            <div className={styles.about} style={{height: "100%"}}>
            {/* ----- INFORMACION DETAIL ----- */}
               <div style={{marginTop: "2%", marginBottom: "2%"}}>
                  {/* ----- TEXTO DETAIL ----- */}
                  <div style={{float: "left", marginLeft: "40px", height: "50%" }}>
                     <h3>NOMBRE: </h3>
                     <h1>{character.name}</h1>
                     <h3>STATUS: {character.status}</h3>
                     <h3>ESPECIE: {character.species}</h3>
                     <h3>GENERO: {character.gender} </h3>
                     <h3>ORIGEN: </h3>
                     <h3>{character.origin?.name}</h3>
                  </div>
                  {/* ----- IMG DETAIL ----- */}
                     <img src={character.image} alt={character.name} 
                     style={{height: "40vw",
                           
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
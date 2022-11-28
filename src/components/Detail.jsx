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
               
               <div style={{marginTop: "2%", marginBottom: "2%"}}>
                  <div style={{float: "left", marginLeft: "40px", height: "50%" }}>
                     <h1>NOMBRE: {character.name}</h1>
                     <h2>STATUS: {character.status}</h2>
                     <h2>ESPECIE: {character.species}</h2>
                     <h2>GENERO: {character.gender} </h2>
                     <h2>ORIGEN: {character.origin?.name}</h2>
                  </div>
                  
                     <img src={character.image} alt={character.name} 
                     style={{height: "40vw",
                           
                           }} />
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
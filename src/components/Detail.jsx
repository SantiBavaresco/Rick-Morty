import {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail(){
    const {detailId} = useParams();
    const [character, setCharacter] = useState("");
    const navigate = useNavigate();

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
     }, [id]);

     return(
        <div>
            <button onClick={()=>navigate("/home")}>Volver</button>
            <h1>NOMBRE: {character.name}</h1>
            <h2>STATUS: {character.status}</h2>
            <h2>ESPECIE: {character.specie}</h2>
            <h2>GENERO: {character.gender} </h2>
            <h2>ORIGEN: {character.origin}</h2>
        </div>

     );

}
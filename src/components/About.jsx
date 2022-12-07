import styles from '../modules/Bienvenido.module.css';
import { useParams, useNavigate } from "react-router-dom";

export default function About(){
    const navigate = useNavigate();
    return( 
    <div className={styles.about}>
        <span > 
            <h1>Hola soy Santi</h1>
            <p>Este es mi about..</p>
        </span>

        <div>
            <button onClick={()=>navigate("/home")} className={styles.button}
            style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button>
        </div>
    </div>
    );
}
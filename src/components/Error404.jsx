import styles from '../modules/Bienvenido.module.css';
import e404 from "../img/error404.png";
import { useNavigate } from "react-router-dom";

export default function Error404(){
    const navigate = useNavigate();
    
    return( 
    <div className={styles.about}>
        <span > 
            <h1></h1>
            <img src={e404} className={styles.imagenes} alt="e404"/>
            <h1>Page not found</h1>
        </span>

        <div>
            <button onClick={()=>navigate("/home")} className={styles.button}
            style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button>
        </div>
    </div>
    );
}
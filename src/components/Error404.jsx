import styles from '../modules/Bienvenido.module.css';
import { useParams, useNavigate } from "react-router-dom";

export default function Error404(){
    const navigate = useNavigate();
    return( 
    <div className={styles.about}>
        <span > 
            <h1>Error 404</h1>
            <img url="https://drive.google.com/file/d/134JZzSPqTVi7bK1ZVBRLuHV4GD8maXbt/view?usp=sharing"
                // style={{height: 100}}
                />
            <p>Page not found</p>
        </span>

        <div>
            <button onClick={()=>navigate("/home")} className={styles.button}
            style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button>
        </div>
    </div>
    );
}
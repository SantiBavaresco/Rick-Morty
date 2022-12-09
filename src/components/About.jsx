import styles from '../modules/Bienvenido.module.css';
import { useParams, useNavigate } from "react-router-dom";
import MortyBlanco from "../img/Morty-blanco.png";

export default function About(){
    const navigate = useNavigate();
    return( 
    <div className={styles.about}>
        <span > 
            <h3>Santiago Bavaresco</h3>
            <div className={styles.shape_outer}
            style={{width: "13%", margin: "auto"}}
            >
                <div className={styles.shape_inner} src={MortyBlanco}></div>
            </div>
            <p style={{width: "95%", margin: "auto", paddingTop: "10px"}}>
                Hola soy Santiago, apasionado por el mundo IT. 
                Tengo mucho interés en la tecnología, soy muy paciente, meticuloso y logro buscar la eficiencia en los problemas cotidianos que se nos presentan en el mundo de la programación. Estoy cursando el boot-camp de Henry para poder actualizarme en el Desarrollo Full Stack Web. 
            </p>
            <p style={{width: "95%", margin: "auto", paddingTop: "10px"}}>       
        Me coincidero un profesional proactivo, analítico, creativo, con capacidad de planeamiento, organización y dirección de personal; asimismo con habilidades y criterio para la toma de decisiones y solución de problemas laborales, sensatez, seguridad y dialogo permanente para el cumplimiento de los objetivos dentro del area relacionada en programacion, soporte, sistemas de seguridad electronica y redes de fibra optica.
        </p>
        </span>
        
        <div>
            <button onClick={()=>navigate("/home")} className={styles.button}
            style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button>
        </div>
    </div>
    );
}
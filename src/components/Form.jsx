import React from 'react'
import styles from '../modules/Bienvenido.module.css';
//import styles from '/src/components/FormForm.module.css'; 
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import validation from "./validation.js";


export default function Form(props){
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
     username: "",
     password: "" 
  });
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });
//----Toogle visible password--------------------------------------------------------------------------------------------
const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
//------------------------------------------------------------------------------------------------
  function handleChange(evento){
    setErrors(
      validation({      
        ...userData,
        [evento.target.name]:evento.target.value,
      })
    );
    // de esta manera puedo agregar propiedades al objeto sin pisar las anteriores, asi no
    // tenemos que crear un handlechange por casa input, lo mismo con los errores.
    setUserData({
      ...userData,
      [evento.target.name]:evento.target.value,
    });
  }

  function handleSubmit(evento){
    evento.preventDefault();
    if(Object.keys(errors).length > 0)// paso las keys a un arreglo, si hay valores es que tengo algun error
    {
      alert("Debes corregir los errores");
    }
    else{
      //alert("Datos completos");
      // console.log(props.Login(userData));
      props.Login(userData); 
      setUserData({
        username: "",
        password: ""
      });
      setErrors({
        username: "",
        password: ""
      });
     // evita la recarga de la pagina y asi no se pierden datos.
    }
  }
    
    return( 
    <div className={styles.about} style={{width: "50%", margin:"auto"}}>
        <form onSubmit={handleSubmit}>
        <span > 
          <div >
            <label htmlFor="username" className={styles.title}>Username: </label> 
            <input 
                key="username"
                name="username"
                type="text" 
                placeholder="Escriba su usuario..."
                value={userData.username}
                onChange={handleChange}
                className={errors.username && "warning"} />
            <p className={styles.danger}> {errors.username && errors.username}</p>
          </div>

          <div >
            <label htmlFor="password" className={styles.title}>Password: </label> 
            <input 
                  key="password"
                  name="password"
                  type="password" 
                  class="form-control"
                  placeholder="Escriba su contraseña..."
                  value={userData.password}
                  onChange={handleChange}
                  className={errors.password && "warning"} />
                  <span className="input-group-btn">
                  { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                  {/* <button type="button" className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button> */}
                  </span>
            <p className={styles.danger}> {errors.password && errors.password}</p>
          </div>         
            <button type="submit" className={styles.button}>Enviar</button>    
            <p className={styles.p}> admin@admin.com - admin1234</p>   
        </span>
        </form>
    </div>
    );
}
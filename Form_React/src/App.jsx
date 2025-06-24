import { useState } from 'react'

import './App.css'

function App() {
  //aqui van las constantes
  const [nombre ,setNombre] = useState("")
  const [gmail, setGmail] = useState("")
  const [contraseña, setContraseña] = useState("")

  const [errorNombre ,setErrorNombre] = useState("")
  const [errorGmail ,setErrorGmail] = useState("")
  const [errorContraseña ,setErrorContraseña] = useState("")

  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Letras, espacios y acentos
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato básico de correo
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/; // Al menos 6 caracteres, 1 letra y 1 número

 const handleSubmit = (e) => {
  e.preventDefault();

  let isValid = true;

  if (!nombreRegex.test(nombre)) {
    alert("El nombre debe contener solo letras y espacios.");
    isValid = false;
  } else {
    setErrorNombre(""); // ← importante
  }


  if (!emailRegex.test(gmail)) {
    alert("Ingresa un correo válido");
    isValid = false;
  } else {
    setErrorGmail(""); // ← importante
  }

  
  if (!passwordRegex.test(contraseña)) {
    alert("La contraseña debe tener al menos 6 caracteres, incluyendo una letra y un número.");
    isValid = false;
  } else {
    setErrorContraseña(""); // ← importante
  }

  if (isValid) {
    console.log({ nombre, gmail, contraseña });
    // alert("Formulario completado correctamente"); ← prueba a comentar esto
    // Si aún así se rompe, prueba con un pequeño delay:
    setTimeout(() => {
      setNombre("");
      setGmail("");
      setContraseña("");
    }, 100);
  }
};


  return (
      <div className="container-fluid">
        <div className="contenedor1">
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <fieldset className="text-center input-group">
                      <h1>Iniciar Sesión</h1>

                      <label htmlFor="usuario">Nombre:</label>
                      <input 
                      type="text" 
                      value={nombre} 
                      onChange ={ (e) => setNombre(e.target.value)} 
                      placeholder="Nombre de usuario">
                      </input>

                      {errorNombre && <p className="error">{errorNombre}</p>}

                      <label htmlFor="gmail">Gmail:</label>
                      <input type="email"
                      value={gmail} 
                      onChange ={ (e) => setGmail(e.target.value)} 
                      placeholder="Gmail de usuario">
                      </input> 

                      {errorGmail && <p className="error">{errorGmail}</p>}

                      <label htmlFor="contraseña">Contraseña:</label>
                      <input type="password" 
                      value={contraseña} 
                      onChange ={(e) => setContraseña(e.target.value)} 
                      placeholder="Contraseña de usuario">
                      </input>

                      {errorContraseña && <p className="error">{errorContraseña}</p>}
                      
                      <button type="submit">Iniciar sesión</button>

                    </fieldset>
                </form>
            </div>
            <div className="footer">
                <a href="https://github.com/dashboard">DG288</a>
            </div>
        </div>
    </div>
  );
};

export default App;

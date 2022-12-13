import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [characters, setCharacters] = useState(null);
  const [url, setUrl] = useState("http://veterinpet.somee.com/api/Veterinarios");


  const reqApi = async () => {
    //Realizando una peticion a la API de Rick and Morty
    const api = await fetch("http://veterinpet.somee.com/api/Veterinarios");
    console.log("Entra a apo",api);
    let veterinariosAPI = await api.json();
    console.log("http://veterinpet.somee.com/api/Veterinarios");
    console.log(JSON.parse(veterinariosAPI));
    //console.log(JSON.parse(veterinariosAPI).data[0].Nombre);
    setCharacters(JSON.parse(veterinariosAPI));
    console.log("Veterinarios",characters);
  };

  const reqApiPOSTbuscar = async () => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    const api = await fetch("http://veterinpet.somee.com/api/Veterinarios?pstrNombre=Alan", requestOptions);
    console.log("api", api);
    let veterinariosAPI = await api.json();
    console.log(JSON.parse(veterinariosAPI));
    //console.log(JSON.parse(veterinariosAPI).data[0].Nombre);
    setCharacters(JSON.parse(veterinariosAPI));
    console.log("Veterinarios",characters.data[0].Nombre);
  };

   const reqApiPOST = async () => {
    //Realizando una peticion a la API de Rick and Morty
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch("http://veterinpet.somee.com/api/Veterinarios?pstrNombre=Alan Prueba&pstraPaterno=Martinez API&pstraMaterno=Romero React&pstrCedula=1234567&pdateFechaNac=2000-08-26&pstrCalle=Monte Pindo&pstrColonia=Cumbres&pstrCodigoPostal=37550&pstrTelefono=4772625320", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  const reqApiPUTM = async () => {
    //Realizando una peticion a la API de Rick and Morty
    var requestOptions = {
      method: 'PUT',
      redirect: 'follow'
    };
    
    fetch("http://veterinpet.somee.com/api/Veterinarios?pintId=9&pstrNombre=Alan Modificar&pstraPaterno=Martinez API M&pstraMaterno=Romero React M&pstrCedula=1234567&pdateFechaNac=2000-08-26&pstrCalle=Monte PindoM&pstrColonia=Cumbres M&pstrCodigoPostal=37550&pstrTelefono=4772625320", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button><br />
        <button onClick={() => reqApi()} className="btn-search">Consumir API GET</button><br />
        <button onClick={() => reqApiPOST()} className="btn-search">Consumir API POST</button><br />
        <button onClick={() => reqApiPUTM()} className="btn-search">Consumir API PUT modificar</button><br />
        <button onClick={() => reqApiPOSTbuscar()} className="btn-search">Consumir API POST Buscar</button><br />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

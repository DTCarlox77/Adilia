import { useState, useEffect } from 'react'

function Contador() {

  const [numero, setNumero] = useState(10);

//   useEffect(() => {
    
//     setInterval(() => {
//         setNumero(numero + 1);
//     }, 1000);

//   }, [numero]);

  const [texto, setTexto] = useState('Hola mundo');

  return (
    <>
        {/* <h1> { numero } </h1> */}
        <h1>{ texto }</h1>
        <input type="text"
            onKeyUp={ (e) => setTexto(e.target.value) }
        />
    </>
  )
}

export default Contador
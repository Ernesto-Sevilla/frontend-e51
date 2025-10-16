import React, {useState} from "react";


const Contador = () => {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const volver0 = () => {
    setContador(0);
  }

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>
        Incrementar
      </button>

      <button onClick={volver0}>
        Reiniciar
      </button>
    </>
    )
}

export default Contador;
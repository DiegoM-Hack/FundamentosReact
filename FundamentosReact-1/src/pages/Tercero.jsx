
/*

  1- useEffect

*/


import { useEffect, useState } from "react"

const Tercero = () => {

  const [segundos, setSegundos] = useState(0)
  const [activo, setActivo] = useState(true)

  // Efecto que actualiza el contador cada segundo
  useEffect(() => {
    let intervalo = null

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos(prev => prev + 1)
      }, 1000)
    } else {
      clearInterval(intervalo)
    }

    // Limpieza: se ejecuta cuando el componente se desmonta o cambia 'activo'
    return () => clearInterval(intervalo)
  }, [activo])

  const handleReset = () => setSegundos(0)
  const handleToggle = () => setActivo(!activo)

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect con temporizador</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          <b>useEffect</b> también se usa para manejar efectos repetitivos, como temporizadores o suscripciones.
        </li>
        <li>
          El <b>return</b> dentro del efecto limpia el intervalo cuando cambia el estado o se desmonta el componente.
        </li>
      </ul>

      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold mb-4">Tiempo transcurrido: {segundos}s</h2>

        <button
          className="bg-green-700 text-white py-1 px-3 mx-1 rounded"
          onClick={handleToggle}
        >
          {activo ? "Pausar" : "Reanudar"}
        </button>

        <button
          className="bg-red-700 text-white py-1 px-3 mx-1 rounded"
          onClick={handleReset}
        >
          Reiniciar
        </button>
      </div>
    </>
  )
}

export default Tercero


/*

  1- useState

*/


import { useState } from "react"

const Segundo = () => {

  const [nombre, setNombre] = useState("")     // Estado para guardar el nombre ingresado
  const [saludo, setSaludo] = useState("")     // Estado para mostrar el saludo

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre.trim() === "") {
      setSaludo("Por favor, ingresa tu nombre.")
    } else {
      setSaludo(`¡Hola, ${nombre}! Bienvenido a React.`)
    }
  }

  const handleReset = () => {
    setNombre("")
    setSaludo("")
  }

  return (
    <>
      <h1 className="font-bold text-2xl">useState con formularios</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Se usa <b>useState</b> para manejar campos de entrada y actualizar la interfaz en tiempo real.
        </li>
      </ul>

      <form onSubmit={handleSubmit} className="text-center mb-8">
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1 mr-2"
        />
        <button
          type="submit"
          className="bg-green-700 text-white py-1 px-3 mx-1 rounded"
        >
          Saludar
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-red-700 text-white py-1 px-3 mx-1 rounded"
        >
          Resetear
        </button>
      </form>

      {saludo && <p className="text-lg font-semibold text-center">{saludo}</p>}
    </>
  )
}

export default Segundo
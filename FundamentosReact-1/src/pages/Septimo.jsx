/*

  1- Zustand 

*/

import storeGalleta from "../context/storeGalleta";
import Octavo from "./Octavo";

const Septimo = () => {
  const detalle = storeGalleta((state) => state.detalle);
  const setDetalle = storeGalleta((state) => state.setDetalle);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Zustand
      </h1>

      <hr className="border-gray-400 mb-8" />

      {/* Lista con más separación */}
      <ul className="list-disc pl-5 mb-12">
        <li>
          Librería ligera para manejar el estado global, ideal para compartir
          datos entre componentes sin necesidad de props.
        </li>
      </ul>

      {/* Contenedor principal con margen superior adicional */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 mt-8">
        {/* Componente Hijo */}
        <Octavo />

        {/* Detalle en Padre */}
        <div className="flex-1 p-4 bg-blue-50 rounded-lg shadow-md text-center md:text-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Detalle en Padre
          </h2>

          <p className="mb-2 text-gray-700">
            <span className="font-medium">Nombre:</span> {detalle.nombre}
          </p>
          <p className="mb-4 text-gray-700">
            <span className="font-medium">Tipo:</span> {detalle.tipo}
          </p>

          <button
            onClick={() =>
              setDetalle({ nombre: "MacBook Air M3", tipo: "Laptop" })
            }
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Cambiar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Septimo;

/*

  1- Zustand 

*/

import storeGalleta from "../context/storeGalleta";

const Octavo = () => {
  const detalle = storeGalleta((state) => state.detalle);

  return (
    <div className="w-64 bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-4">
        <h3 className="text-white text-lg font-bold text-center">
          Detalle en Hijo
        </h3>
      </div>
      <div className="p-4 text-center">
        <p className="text-gray-800 mb-2">
          <span className="font-semibold">Nombre:</span> {detalle.nombre}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Tipo:</span> {detalle.tipo}
        </p>
      </div>
    </div>
  );
};

export default Octavo;
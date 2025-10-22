/*

  1- Props 

*/

/*
 * 🌟 1- Props Demonstration: Parent Component
 * - Defines data (state or constant)
 * - Passes data down to a child component via props
 */

import Sexto from "./Sexto";

const Quinto = () => {
  const userData = {
    name: "Anthon",
    rol: "Desarrolador", 
    email: "anthonchang@gmail.com",
    id: 666,
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg max-w-xl mx-auto my-10 bg-white">
      <h1 className="font-extrabold text-3xl text-indigo-700 mb-4">
        Component Props (Propiedades)
      </h1>
      <hr className="border-indigo-200 mb-6" />

      <p className="text-gray-700 mb-6">
        Las Props (propiedades) permiten pasar datos desde un componente padre
        (Quinto) a un componente hijo (Sexto). Son de solo lectura (inmutables).
      </p>

      <h2 className="text-xl font-semibold text-center text-indigo-600 mb-4 p-2 bg-indigo-50 rounded">
        Componente Padre
      </h2>

      <div className="mb-8 p-4 border border-dashed border-gray-300 rounded-lg">
        <p className="font-medium">Datos definidos en el Padre:</p>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto mt-2">
          {JSON.stringify(userData, null, 2)}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-center text-green-600 mb-4 p-2 bg-green-50 rounded">
        Componente Hijo (Recibe las Props)
      </h2>

      <div className="border-2 border-green-500 p-5 rounded-lg bg-white shadow-inner">
        <Sexto data={userData} />
      </div>
    </div>
  );
};

export default Quinto;
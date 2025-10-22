/*
  2- Renderizado condicional y renderizado de listas
*/

import { useState } from "react";

const Productos = () => {
  // Estado que controla si el usuario es administrador
  const [esAdmin, setEsAdmin] = useState(false);

  // Lista de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Laptop", precio: 850 },
    { id: 2, nombre: "Smartphone", precio: 420 },
    { id: 3, nombre: "Teclado Mecánico", precio: 90 },
    { id: 4, nombre: "Audífonos", precio: 65 },
  ]);

  // Función para eliminar un producto (solo en modo admin)
  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((p) => p.id !== id);
    setProductos(nuevosProductos);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Renderizado Condicional y de Listas</h1>
      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc text-left pl-5 mb-8">
        <li>
          <strong>Renderizado condicional:</strong> Muestra distintos elementos según el rol del usuario.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Recorre un array de productos y los muestra dinámicamente con <code>.map()</code>.
        </li>
      </ul>

      {/* Condicional */}
      <div className="border rounded-lg p-4 w-96 mx-auto mb-8 shadow-lg">
        <h2 className="text-lg font-semibold underline mb-3">Modo Usuario</h2>

        {esAdmin ? (
          <p className="text-green-600 font-semibold">👑 Estás en modo Administrador</p>
        ) : (
          <p className="text-blue-600 font-semibold">🙋 Estás en modo Visitante</p>
        )}

        <button
          onClick={() => setEsAdmin(!esAdmin)}
          className="bg-indigo-600 text-white px-3 py-1 rounded mt-3"
        >
          {esAdmin ? "Cambiar a Visitante" : "Cambiar a Admin"}
        </button>
      </div>

      {/* Lista */}
      <div className="border rounded-lg p-4 w-96 mx-auto shadow-lg">
        <h2 className="text-lg font-semibold underline mb-3">Lista de Productos</h2>

        {productos.length > 0 ? (
          <ul className="text-left">
            {productos.map((producto) => (
              <li
                key={producto.id}
                className="flex justify-between items-center mb-2 border-b pb-1"
              >
                <span>
                  💻 {producto.nombre} — <strong>${producto.precio}</strong>
                </span>

                {/* Renderizado condicional interno */}
                {esAdmin && (
                  <button
                    onClick={() => eliminarProducto(producto.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Eliminar
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No hay productos disponibles 😢</p>
        )}
      </div>
    </div>
  );
};

export default Productos;

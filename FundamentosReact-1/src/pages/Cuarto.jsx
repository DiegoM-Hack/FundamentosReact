
/*

  1- customHook

*/

import { useState } from "react"
import { useFetch } from "../customHook/useFecth"

const Cuarto = () => {

  const [products, setProducts] = useState([])
  const [memes, setMemes] = useState([])

  const { fetchData, loading, error } = useFetch()

  const getDataProducts = async () => {
    const data = await fetchData("https://fakestoreapi.com/products")
    if (data) setProducts(data)
  }

  const getDataMemes = async () => {
    const data = await fetchData("https://api.imgflip.com/get_memes")
    if (data) setMemes(data)
  }

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Los <b>custom hooks</b> permiten encapsular y reutilizar lógica (como llamadas a APIs) entre componentes.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="w-120 border rounded-lg p-4 w-80 text-center">

          <h2 className="text-lg font-semibold mb-4 underline">Más información</h2>

          {loading && <p className="text-blue-700">Cargando datos...</p>}
          {error && <p className="text-red-700">Error: {error}</p>}

          {!loading && !error && (
            <>
              <pre className="text-left text-sm bg-gray-100 p-2 rounded mb-2">
                Producto: {JSON.stringify(products[3]?.title ?? "N/A")}
              </pre>

              <pre className="text-left text-sm bg-gray-100 p-2 rounded mb-2">
                Meme: {JSON.stringify(memes.data?.memes[0]?.name ?? "N/A")}
              </pre>
            </>
          )}

          <div className="mt-4">
            <button
              className="bg-violet-700 text-white py-1 px-3 mx-1 rounded"
              onClick={getDataProducts}
            >
              Obtener Productos
            </button>

            <button
              className="bg-violet-700 text-white py-1 px-3 mx-1 rounded"
              onClick={getDataMemes}
            >
              Obtener Memes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cuarto
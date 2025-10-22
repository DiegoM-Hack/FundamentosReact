import { useState } from "react"

// Custom Hook reutilizable
export const useFetch = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (url) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(url)
      if (!response.ok) throw new Error("Error al obtener los datos")

      const data = await response.json()
      return data

    } catch (err) {
      setError(err.message)
      console.error(err)
      return null

    } finally {
      setLoading(false)
    }
  }

  // El hook devuelve tanto la función como los estados
  return { fetchData, loading, error }
}

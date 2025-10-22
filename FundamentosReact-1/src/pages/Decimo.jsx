/*
  2- LocalStorage: Guardar Preferencias del Usuario
  */
import { useState, useEffect } from "react";

const PreferenciasUsuario = () => {
  const [usuario, setUsuario] = useState({ nombre: "", tema: "light" });

  // Cargar las preferencias al iniciar
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("preferencias-usuario"));
    if (datosGuardados) {
      setUsuario(datosGuardados);
    }
  }, []);

  // Guardar automáticamente en LocalStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem("preferencias-usuario", JSON.stringify(usuario));
  }, [usuario]);

  // Cambiar nombre del usuario
  const cambiarNombre = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
  };

  // Cambiar tema (oscuro/claro)
  const cambiarTema = () => {
    setUsuario({ ...usuario, tema: usuario.tema === "light" ? "dark" : "light" });
  };

  // Borrar preferencias del navegador
  const borrarPreferencias = () => {
    localStorage.removeItem("preferencias-usuario");
    setUsuario({ nombre: "", tema: "light" });
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        usuario.tema === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Preferencias del Usuario</h1>

      <div className="border border-gray-400 rounded-lg p-4 w-96 mb-6 text-left bg-white text-black shadow-sm">
        <h2 className="text-lg font-semibold mb-2">📘 ¿Qué es LocalStorage?</h2>
        <p className="mb-3">
          LocalStorage es una herramienta del navegador que permite guardar información
          de forma local (en el dispositivo del usuario) en pares clave–valor.
        </p>
        <h2 className="text-lg font-semibold mb-2">💡 ¿Para qué sirve?</h2>
        <p>
          Sirve para mantener datos incluso después de recargar o cerrar la página.
          Es ideal para guardar configuraciones, sesiones o preferencias del usuario,
          como el tema, idioma o nombre.
        </p>
      </div>

      <div className="border rounded-lg p-6 w-80 text-center shadow-lg">
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={usuario.nombre}
          onChange={cambiarNombre}
          className="border p-2 rounded w-full mb-3 text-black"
        />

        <p className="mb-3">
          Tema actual: <strong>{usuario.tema === "light" ? "Claro" : "Oscuro"}</strong>
        </p>

        <button
          onClick={cambiarTema}
          className="bg-blue-600 text-white px-3 py-1 rounded mb-3 w-full"
        >
          Cambiar Tema
        </button>

        <button
          onClick={borrarPreferencias}
          className="bg-red-600 text-white px-3 py-1 rounded w-full"
        >
          Borrar Preferencias
        </button>
      </div>

      {usuario.nombre && (
        <p className="mt-6 text-lg">
          👋 ¡Hola, <strong>{usuario.nombre}</strong>!
        </p>
      )}
    </div>
  );
};

export default PreferenciasUsuario;

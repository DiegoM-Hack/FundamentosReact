/*

  1- Props 

*/


/*
 * 🌟 1- Props Demonstration: Child Component
 * - Receives the 'data' object prop from the parent.
 * - Destructures and displays the data properties.
 */

const Sexto = ({ data }) => {
  const { name, rol, email } = data;

  return (
    <div className="text-center p-4">
      <h3 className="text-xl font-bold text-orange-700 mb-4">
        Componente Hijo: Sexto
      </h3>

      <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6 shadow-md mx-auto max-w-sm">
        <h4 className="text-2xl font-extrabold text-gray-800 mb-4">
          👋 Bienvenido(a), {name}!
        </h4>

        <div className="space-y-2 text-left text-gray-700">
          <p>
            <span className="font-semibold text-orange-600">Rol:</span> {rol}
          </p>
          <p>
            <span className="font-semibold text-orange-600">Email:</span>{" "}
            {email}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Estos datos se recibieron como una prop del componente Padre.
      </p>
    </div>
  );
};

export default Sexto;
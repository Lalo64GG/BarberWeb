import barber from "../public/img/barber.svg";

export const Card = ({ title, local, barberia }) => {
  // Verificar si barberia existe
  const tieneBarberia = barberia && barberia.horario && barberia.horario.length > 0;

  // Agrupa los días en "Lunes a Viernes" y "Sábado y Domingo" solo si barberia existe
  const diasLaborables = tieneBarberia ? barberia.horario.slice(0, 5) : [];
  const diasDescanso = tieneBarberia ? barberia.horario.slice(5) : [];

  return (
    <div className="bg-slate-400 flex mt-6 gap-x-4 rounded-md shadow-md text-justify">
      <div className="w-1/2 px-6 py-2">
        <img src={barber} alt="img barber" className="w-full h-full" />
      </div>
      <div className="w-1/2">
        <h2 className="font-bold text-white text-center mt-4"> {title} </h2>
        
        {/* Mostrar solo si barberia existe */}
        {tieneBarberia && (
          <>
            <div>
              <h3>Lunes a Viernes:</h3>
              <ul>
                {diasLaborables.map((dia, index) => (
                  <li key={index}>{dia}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Sábado y Domingo:</h3>
              <ul>
                {diasDescanso.map((dia, index) => (
                  <li key={index}>{dia}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        <p className="font-normal">{local}</p>
       
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { Card } from '../Molecules/Card';
import { Nav } from '../Molecules/Nav';
import Text from '../Atoms/Text';

export const MyBarber = () => {
  const [barber, setBarber] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem('id');
    const authToken = localStorage.getItem('token');

    const consumir = async () => {
      const response = await fetch(`http://localhost:4000/API/barberia/obtenerBarberiaUsuario/${id}`, {
        headers: {
          Authorization: ` ${authToken}`,
        },
      });

      const data = await response.json();
      setBarber(data.barberias);
    };

    consumir();
  }, []);

  return (
    <div className="min-h-svh flex items-center justify-center fondo">
      <div className="bg-black bg-opacity-70 p-8 w-full min-h-svh overflow-hidden">
        <Text text={"Bienvenido"} desing={"font-bold text-white"} />
        <Nav />

        {/* Iterar sobre las barberías y renderizar la información de cada una */}
        {barber.map((barberia) => (
          <Card key={barberia._id} title={ barberia.nombre} local={barberia.contacto} barberia={barberia} /* Otra información de la barbería */ />
        ))}
      </div>
    </div>
  );
};

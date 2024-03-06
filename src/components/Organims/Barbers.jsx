import React, { useEffect, useState } from "react";
import Text from "../Atoms/Text";
import { Nav } from "../Molecules/Nav";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { SearchBard } from "../Molecules/SearchBard";
import { Card } from "../Molecules/Card";

export const Barbers = () => {
  const [barber, setBarber] = useState([]);
  const [searchBarber, setSearchBarber] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const consumo = async () => {
      const authToken = localStorage.getItem("token");

      try {
        const res = await fetch("http://localhost:4000/API/barberia", {
          headers: {
            Authorization: ` ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setBarber(data.barberias);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    consumo();
  }, []);

  return (
    <div>
      <div className="min-h-svh fondo flex justify-center items-center">
        <div className="bg-black bg-opacity-70 py-2 px-8 w-full min-h-svh overflow-hidden">
          {Array.isArray(searchBarber) && searchBarber.length ? (
            searchBarber.map((barberia, i) => (
              <Card key={i} title={ barberia.name} local={ barber.estado } barberia={ barberia } />
            ))
          ) : (
            <div>
              <Text text={"Bienvenido"} desing={"font-bold text-white"} />
              <Nav />
              <SearchBard
                setSearchBarber={setSearchBarber}
                search={search}
                setSearch={setSearch}
              />
              {barber.map((barberia, i) => (
                <Card
                  key={i}
                  title={barberia.nombre}
                  local={barberia.contacto}
                  barberia={barberia}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import Text from "../Atoms/Text";
import { Nav } from "../Molecules/Nav";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { SearchBard } from "../Molecules/SearchBard";
import { Card } from "../Molecules/Card";

export const Barbers = () => {
  const [barber, setBarber] = useState();

  useEffect(() => {
    const consumo = async () => {
      // Replace 'YOUR_AUTH_TOKEN' with your actual authentication token
      const authToken = localStorage.getItem("token");
      console.log(authToken);

      try {
        const res = await fetch("http://localhost:4000/API/barberia", {
          headers: {
            Authorization: ` ${authToken}`,
            // You can add other headers if needed
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setBarber(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    consumo();
  }, []);

  return (
    <div>
      <div className=" min-h-svh fondo flex justify-center items-center">
        <div className="bg-black bg-opacity-70 py-2 px-8 w-full min-h-svh overflow-hidden">
          <Text text={"Bienvenido"} desing={ "font-bold text-white" }/>
          <Nav />
          <SearchBard />
          {/* {barber.map((barberia, i) => (
            <Card key={i}  />
          ))} */}
        </div>
      </div>
    </div>
  );
};

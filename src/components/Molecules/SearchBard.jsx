import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { useState } from "react";

export const SearchBard = ({ setSearchBarber, setSearch, search }) => {
 
  const handleBuscar = async() => {

    try{
      const authToken = localStorage.getItem("token");
    const res = await fetch(`http://localhost:4000/API/barberia/obtenerBarberiasEstado/${search}`, {
      headers: {
        Authorization: ` ${authToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    console.log(data);
    setSearchBarber(data);
    }catch(error){
      console.log("Sucedio un  error: ", error);
    }
  }

  return (
    <div className="">
      <div className=" space-x-5 mb-2">
        <Input
          type={"text"}
          desing={
            "   w-36 focus:outline bg-black border-2 border-white text-white px-2  "
          }
          setState={setSearch}
        />
        <button
          className={`bg-[#d66f16] text-white py-1 px-6 rounded-md mt-10 hover:cursor-pointer hover:bg-[#8e480c] `}
          onClick={ handleBuscar }
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

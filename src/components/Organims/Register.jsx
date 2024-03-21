import React from 'react'
import Logo from '../Atoms/Logo'
import Input from '../Atoms/Input'
import { useState } from 'react'

export const Register = () => {
    const [ Usernombre, setNombre ] = useState("");
    const [ apellido, setApellido ] = useState("");
    const [ correo, setCorreo ] = useState("");
    const [ password, setPassword ] = useState(""); 

    const handleSubmit = async (e) => {

        const img = "";
        const estado = "true";
        const google = "false";

        e.preventDefault();

        if([Usernombre, apellido, password, correo ].includes("")){
            alert("ingrese datos")
            return;
        }

        const authToken = localStorage.getItem("token");
        const userObject = {
            nombre: Usernombre,
            apellido,
            correo,
            password,
            img,
            estado,
            google
        }
        try {
            const res = await fetch("http://localhost:4000/API/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: ` ${authToken}`,
                },
                body: JSON.stringify(userObject),
            })

            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className=" min-h-svh flex items-center justify-center fondo">
<div className="bg-black bg-opacity-70 p-8 w-full min-h-svh overflow-hidden">
  <div className='flex justify-center items-center'>  
    <Logo companyName={"classys"} color={"#df6616"} />
  </div>
  <div className='mt-6'>
    <form action="">
        <Input type= {"text"} placeholder={"Ingrese su nombre"} desing={ "border-b text-white border-white bg-black bg-opacity-0  p-2 w-full mb-6 focus:outline-none"} setState={setNombre}/>
        <Input type= {"text"} placeholder={"Ingrese su apellido"} desing={ "border-b text-white border-white bg-black bg-opacity-0  p-2 w-full mb-6 focus:outline-none"} setState={ setApellido }/>
        <Input  type= {"email"} placeholder={"Ingrese su correo"} desing={ "border-b text-white border-white bg-black bg-opacity-0  p-2 w-full mb-6 focus:outline-none"} setState={setCorreo}/>
        <Input type= {"password"} placeholder={"Ingrese su contraseña"}  desing={ "border-b text-white border-white bg-black bg-opacity-0  p-2 w-full mb-6 focus:outline-none"} setState={setPassword}/>

        <div className=' flex justify-center items-center'>
            <button className=' bg-[#d66f16]  text-white  p-2 w-full mb-6 focus:outline-none rounded-md'>
                Registrarse
            </button>
        </div>
    </form>
  </div>
</div>
</div>
  )
}

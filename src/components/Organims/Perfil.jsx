import React, { useState } from "react";
import { Card } from "../Molecules/Card";
import Input from "../Atoms/Input";
import { Nav } from "../Molecules/Nav";
import Text from "../Atoms/Text";

export const Perfil = () => {
  const [show, setShow] = useState(false);
  const [cantidadServicios, setCantidadServicios] = useState(0);
  const [nombre, setNombre] = useState();
  const [servicios, setServicios] = useState([]);
  const [horarioLunesViernes, setHorarioLunesViernes] = useState("");
  const [horarioSabadosDomingo, setHorarioSabadosDomingo] = useState("");
  const [numeroContacto, setNumeroContacto] = useState("");
  const [showCita, setShowCita] = useState(false);
  const [ horario, setHorario ] = useState()
  const [servicio, setServicio] = useState()
  const [barberia, setBarberia] = useState()
  const [estado, setEstado] = useState()
  const [linkImg, setLinkImg] = useState()
  const [link, setLink] = useState()

  const handleShow = () => setShow(true);
  const handleShowCita = () => setShowCita(true);

  const handleCantidadChange = (e) => {
    const cantidad = parseInt(e.target.value, 10);
    setCantidadServicios(isNaN(cantidad) ? 0 : cantidad);
    setServicios([]); // Limpiar los servicios al cambiar la cantidad
  };

  const handleServicioChange = (index, value) => {
    const nuevosServicios = [...servicios];
    nuevosServicios[index] = value;
    setServicios(nuevosServicios);
  };

  const handleEnviarServicios = async () => {

    if ([nombre, servicios, horarioLunesViernes, horarioSabadosDomingo, numeroContacto, link, linkImg].includes("")) {
      alert("Ingrese datos ");
      return;
    }
    const horario = ["Lunes-Viernes",horarioLunesViernes, "Sabados-Domingos",horarioSabadosDomingo];

    const authToken = localStorage.getItem("token");

    const barberObject = {
      nombre,
      estado,
      servicios,
      horario,
      contacto: numeroContacto,
      reseñas: [],
      linkImg,
      link
    };

    try {
      const res = await fetch("http://localhost:4000/API/barberia", {
        method: "POST",
        headers: {
          Authorization: ` ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(barberObject),
      });

      const data = res.json();
      console.log(data);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCrearCita = async () => {
    const authToken = localStorage.getItem("token");
    const citaObject = {
      servicio,
      horario,
      barberia,

    }

    try {
      const res = await fetch("http://localhost:4000/API/cita/", {
        method: "POST",
        headers: {
          Authorization: ` ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(citaObject),
      });

      const data = res.json();
      console.log(data);
      setShowCita(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen fondo flex justify-center items-center">
      <div className="bg-black bg-opacity-70 py-2 px-8 w-full min-h-screen overflow-hidden">
        <Text text={"Bienvenido"} desing={"font-bold text-white"} />
        <Nav />
        <Card
          title={"Edy's barber"}
          local={"Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
        />
        <button className="w-full py-2 bg-black rounded-sm text-white mb-5 mt-10" onClick={ handleShowCita }>
          Citas
        </button>

        <button
          className="w-full py-2 bg-black rounded-sm text-white mb-5"
          onClick={handleShow}
        >
          Crear Barberia
        </button>

        {show && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-85">
            <div>
              <form className="bg-white rounded-md px-4 py-6 w-80">
                <div className="mb-5">
                  <label htmlFor="ingresa" className="block font-bold text-lg">
                    Ingresa el nombre:
                  </label>
                  <input
                    id="ingresa"
                    type="text"
                    
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="cantidad" className="block font-bold text-lg">
                    Cantidad de Servicios:
                  </label>
                  <input
                    id="cantidad"
                    type="number"
                    value={cantidadServicios}
                    onChange={handleCantidadChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                {Array.from({ length: cantidadServicios }).map((_, index) => (
                  <div key={index} className="mb-5">
                    <label
                      htmlFor={`servicio-${index + 1}`}
                      className="block font-bold text-lg"
                    >
                      Servicio {index + 1}:
                    </label>
                    <input
                      id={`servicio-${index + 1}`}
                      type="text"
                      value={servicios[index] || ""}
                      onChange={(e) =>
                        handleServicioChange(index, e.target.value)
                      }
                      className="w-full border border-gray-300 p-2 rounded-md"
                    />
                  </div>
                ))}

                <div className="mb-5">
                  <label
                    htmlFor="horario-lunes-viernes"
                    className="block font-bold text-lg"
                  >
                    Ingresa el Horario Lunes a Viernes:
                  </label>
                  <input
                    id="horario-lunes-viernes"
                    type="text"
                    value={horarioLunesViernes}
                    onChange={(e) => setHorarioLunesViernes(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="horario-sabados-domingo"
                    className="block font-bold text-lg"
                  >
                    Ingresa el Horario Sábados y Domingo:
                  </label>
                  <input
                    id="horario-sabados-domingo"
                    type="text"
                    value={horarioSabadosDomingo}
                    onChange={(e) => setHorarioSabadosDomingo(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="numero-contacto"
                    className="block font-bold text-lg"
                  >
                    Ingresa número de contacto:
                  </label>
                  <input
                    id="numero-contacto"
                    type="text"
                    value={numeroContacto}
                    onChange={(e) => setNumeroContacto(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="numero-contacto"
                    className="block font-bold text-lg"
                  >
                    Ingresa el estado:
                  </label>
                  <input
                    id="numero-contacto"
                    type="text"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                <div className="mb-5">
                <label
                    htmlFor="numero-contacto"
                    className="block font-bold text-lg"
                  >
                    Ingresa el link de la imagen:
                  </label>
                  <input
                    id="numero-contacto"
                    type="text"
                    value={linkImg}
                    onChange={(e) => setLinkImg(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="numero-contacto"
                    className="block font-bold text-lg"
                  >
                    Ingresa el link del sitio web:
                  </label>
                  <input
                    id="numero-contacto"
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleEnviarServicios}
                  className="w-full bg-black text-white rounded-md py-2"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        )}

        {showCita && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-85">
            <div>
              <form className="bg-white rounded-md px-4 py-6 w-80">
                <div className="mb-5">
                  <label htmlFor="ingresa" className="block font-bold text-lg">
                    Ingresa el servicio:
                  </label>
                  <input
                    id="ingresa"
                    type="text"
                  
                    onChange={(e) => setServicio(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="ingresa" className="block font-bold text-lg">
                    Ingresa dia y hora:
                  </label>
                  <input
                    id="ingresa"
                    type="datetime-local"
                    
                    onChange={(e) => setHorario(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="ingresa" className="block font-bold text-lg">
                    Ingresa el nombre de la Barberia:
                  </label>
                  <input
                    id="ingresa"
                    type="text"
                    
                    onChange={(e) => setBarberia(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleCrearCita}
                  className="w-full bg-black text-white rounded-md py-2"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

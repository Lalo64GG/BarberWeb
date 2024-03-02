import barber from "../public/img/barber.svg"

export const Card = ({ title, local}) => {
  return (
    <div className=" bg-slate-400 flex mt-6 gap-x-4 rounded-md shadow-md">
        <div className="w-1/2 px-6 py-2">
          <img src={barber} alt="img barber" className=" w-full h-full" />
        </div>
        <div className="w-1/2">
            <h2 className=" font-bold text-white  text-center mt-4 "> {title} </h2>
            <p className=" font-normal">{local}</p>
            <div className = "flex justify-center items-center mb-4">
             <button className =" bg-[#d66f16] px-4 py-2 rounded-md text-white" > Visitar </button>
            </div>
        </div>
    </div>
  )
}

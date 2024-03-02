import Input from "../Atoms/Input"
import Button from "../Atoms/Button"
import { useState } from "react"

export const SearchBard = () => {

  const [search, setSearch] = useState("")

  return (
    <div className="">
        <div className=" space-x-5 mb-2">
        <Input type={"text"} desing={"   w-36 focus:outline bg-black border-2 border-white text-white px-2  "} setState={setSearch}/>
        <Button text={"Buscar"} color={"#df6616"} children = {{}} desing={" "} />
        </div>
        <Input type={"text"} desing={"  w-36 focus:outline bg-black border-2 border-white text-white px-2 "} setState={setSearch}/>
    </div>
  )
}

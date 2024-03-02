import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userObject = {
    correo: email,
    password: password
  }

  return (
    <div className="flex flex-col items-center" >
      <Input type="email" placeholder="Correo" setState={ setEmail } desing={ "border-b text-white border-white bg-black bg-opacity-0  p-2 w-full mb-6 focus:outline-none"}  />
      <Input type="password" placeholder="Password" setState={ setPassword } desing={ "border-b text-white border-white bg-black bg-opacity-0  p-2 w-full mb-6 focus:outline-none"} />
      <Button text="Entrar" color="#df6616" children = { userObject } desing = { "border-b text-white border-white bg-black bg-opacity-0  p-2 w-full mb-6 focus:outline-none" }  />
    </div>
  );
};

export default LoginForm;

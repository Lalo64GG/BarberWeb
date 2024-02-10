import Input from '../Atoms/Input';
import Button from '../Atoms/Button';

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center">
      <Input type="email" placeholder="Correo" />
      <Input type="password" placeholder="Password" />
      <Button text="Entrar" color="#df6616" />
    </div>
  );
};

export default LoginForm;

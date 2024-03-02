import LoginForm from '../Molecules/LoginForm';
import Text from '../Atoms/Text';
import Logo from '../Atoms/Logo';

const Login = () => {
  return (
    <div className=" min-h-svh flex items-center justify-center fondo">
      <div className="bg-black bg-opacity-70 p-8 w-full min-h-svh overflow-hidden">
        <div className='flex justify-center items-center'>  
          <Logo companyName={"classys"} color={"#df6616"} />
        </div>
        <div className='mt-6'>
          <LoginForm />
          <Text text="Crear cuenta" desing={ "text-[#df6616] mt-20 mb-4" } />
        </div>
      </div>
    </div>
  );
};

export default Login;

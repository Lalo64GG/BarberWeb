import { useNavigate } from 'react-router-dom';


const Button = ({ text, children }) => {
  const navigate = useNavigate();


  const handleRequest = async( e ) =>{
    e.preventDefault();
    if (children == undefined) {
      alert("Ingrese datos");
      return;
    }
    try {
      const response = await fetch('http://localhost:4000/API/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(children),
      });
      const data = await response.json();
      console.log(data);
      console.log("This is a token: ", data.token);

      console.log("this is user id: ", data.usuario.uid);

      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.usuario.uid)
      navigate('/home'); 
    } catch (error) {
      console.log("Algun error sucedio: ", error);
    }
  }

  return (
    <button
      className={`bg-[#d66f16] text-white py-2 px-6 rounded-md mt-10 hover:cursor-pointer hover:bg-[#8e480c] `}
      onClick={ handleRequest }
    >
      {text}
    </button>
  );
};

export default Button;

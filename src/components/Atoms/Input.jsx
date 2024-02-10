const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-b text-white border-white bg-black bg-opacity-0  p-2 w-full mb-6 focus:outline-none"
    />
  );
};

export default Input;

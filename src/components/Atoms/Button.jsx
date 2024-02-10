const Button = ({ text, color }) => {
  console.log(color);
  return (
    <button
      className={`bg-[#d66f16] text-white py-2 px-10 rounded-md mt-10 `}
    >
      {text}
    </button>
  );
};

export default Button;

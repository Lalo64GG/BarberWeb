const Input = ({ type, placeholder, setState, desing }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className = { `${desing} ` }
      onChange={ (e) => setState(e.target.value) }
    />
  );
};

export default Input;

const Text = ({ text, desing }) => {
  return (
    <p className={` ${ desing } text-2xl text-center`}>
      {text}
    </p>
  );
};

export default Text;

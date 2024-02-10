const Logo = ({ companyName, color }) => {
  const logoStyle = {
    width: '200px', 
    height: '200px',
    borderRadius: '50%',
    border: `5px solid #df6616`, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: `white`, 
    textTransform: 'uppercase',
  };

  return (
    <div className=' mb-6' style={logoStyle}>
      {companyName}
    </div>
  );
};

export default Logo;

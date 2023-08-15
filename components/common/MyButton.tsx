const MyButton = ({ size = 'M', color = 'default', text, onClick }) => {
  /**
   * 사용예
   * <MyButton size="L" color="positive" text="Positive Button" onClick={() => console.log("Positive clicked")} />
   * <MyButton size="L" color="positive" text="Positive Button" onClick={() => console.log("Positive clicked")} />
   * <MyButton text="Default Button" onClick={() => console.log("Default clicked")} />
   */
  const getSizeStyles = () => {
    switch (size) {
      case 'L':
        return { width: '315px', height: '60px' };
      case 'S':
        return { width: '135px', height: '60px' };
      default:
        return { width: '270px', height: '60px' };
    }
  };

  const getColorStyles = () => {
    switch (color) {
      case 'positive':
        return {
          background: 'linear-gradient(317deg, #84D17D 0%, #BEEDB9 100%)',
        };
      case 'negative':
        return {
          background: 'linear-gradient(317deg, #F28F8F 0%, #FFC9C0 100%)',
        };
      default:
        return {
          background: 'linear-gradient(317deg, #92A3FD 0%, #9DCEFF 100%)',
        };
    }
  };

  return (
    <button
      style={{
        ...getSizeStyles(),
        ...getColorStyles(),
        borderRadius: '99px',
        boxShadow: '0px 10px 22px 0px rgba(149, 173, 254, 0.30)',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton;

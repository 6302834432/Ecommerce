import '../Button/Button.css'

export  function Button({
    type,
    text,
    onClick,
    color,
    backgroundColor,
    fontSize,
    width,
    height,
  }) {
    return (
      <div className='container'>
        <button
          style={{
            color,
            backgroundColor,
            fontSize,
            width,
            height,
          }}
          type={type}
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    );
  }
  
  Button.defaultProps = {
    type: 'button',
    text: 'Submit',
    backgroundColor: '#e72929',
    color: 'white',
    fontSize: '1.3rem',
    width: '12rem',
    height: '3.5rem',
  };
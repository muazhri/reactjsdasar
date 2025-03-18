const Button = (props) => {
    const {style, children} = props;
    return  (
      <button className={`h-10 px-6 font-semibold rounded-md ${style}  text-white`}>
      {children}
    </button>
    );  
  
  };

  export default Button
const Button = (props) => {
  const { style, children, onClick = () => {}, type="button" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${style}  text-white`}
      type={type}onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;

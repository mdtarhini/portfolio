const Button = ({ children }) => {
  return (
    <button
      className={`flex justify-center items-center w-${
        width ? width : "auto"
      } h-${height ? height : "auto"} px-${px ? px : "2"} py-${
        py ? py : "1"
      } rounded-${rounded ? rounded : "none"}  `}
    >
      {children}
    </button>
  );
};
export default Button;

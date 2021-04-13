const Heading = ({ text, subText }) => {
  return (
    <div className="mb-2">
      <h2 className="text-2xl xs:text-xl md:text-3xl font-bold mb-1">{text}</h2>
      {subText && <h3 className="text-lg italic font-semibold">{subText}</h3>}
    </div>
  );
};
export default Heading;

const SectionTitle = (props) => {
  return (
    <div className="text-3xl font-bold">
      <h2>{props.title}</h2>
      <div className="h-2.5 w-24 bg-gradient-to-r from-gray-900 to-white mb-4 dark:from-white dark:to-blackish"></div>
    </div>
  );
};
export default SectionTitle;

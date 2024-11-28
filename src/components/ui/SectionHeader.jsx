// THis could also take a color as a prop
const SectionHeader = ({ headingText, color }) => {
  return (
    <div className={`font-bold text-2xl mb-4 ${color}`}>{headingText}</div>
  );
};

export default SectionHeader;

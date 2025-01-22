const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <div className="pt-2 my-2 text-center border-t border-gray-300 dark:border-[#3b3b3b] ">
      <p className="text-sm text-gray-400 dark:text-gray-600">
        The Sapphire {currentYear}
      </p>
    </div>
  );
};

export default Footer;

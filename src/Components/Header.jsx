
const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-10 bg-gray-800 text-white">
      <div className="text-2xl font-bold">MyApp</div>
      <nav className="flex space-x-8">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Contact Us</a>
        <a href="#" className="hover:text-blue-400">Your Order</a>
      </nav>
    </header>
  );
};

export default Header;


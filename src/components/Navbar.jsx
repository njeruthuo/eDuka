const Navbar = () => {
  return (
    <div className=" bg-gray-500">
      <div className="w-[95%] mx-auto">
        <ul className="w-full flex justify-end place-items-center space-x-12">
          <li className="mr-auto">
            <h1 className="logo-text">E-lectronics</h1>
          </li>
          <li className="items">search</li>
          <li className="items">Cart</li>
          <li className="items">Login</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

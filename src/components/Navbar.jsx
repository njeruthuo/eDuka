import { Link } from "react-router-dom";
import cartIcon from "../imgs/icons/cart.png";
import search from "../imgs/icons/find.png";
import user from "../imgs/icons/user.png";
import { useCart } from "../CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gray-500 sticky top-0">
      <div className="w-[95%] mx-auto">
        <ul className="w-full flex justify-end place-items-center space-x-12">
          <li className="mr-auto">
            <h1 className="logo-text sm:text-xl text-lg">
              <Link to="/">E-lectronix</Link>
            </h1>
          </li>
          <li className="items">
            <img className="h-8" src={search} alt="Search" />
          </li>
          <li className="items">
            <div className="relative">
              <Link to="/cart">
                <img className="h-8" src={cartIcon} alt="Cart" />
                {totalItems > 0 && (
                  <p className="absolute top-0 right-0 text-white bg-red-400 w-4 h-4 text-xs text-center rounded-full">
                    {totalItems}
                  </p>
                )}
              </Link>
            </div>
          </li>
          <li className="items">
            <img className="h-8" src={user} alt="User" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

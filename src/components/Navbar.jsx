import { Link } from "react-router-dom";
import cart from "../imgs/icons/cart.png";
import search from "../imgs/icons/find.png";
import user from "../imgs/icons/user.png";

const Navbar = () => {
  return (
    <div className=" bg-gray-500 sticky top-0">
      <div className="w-[95%] mx-auto">
        <ul className="w-full flex justify-end place-items-center space-x-12">
          <li className="mr-auto">
            <h1 className="logo-text text-xl">
              <Link to={'/'}>E-lectronix</Link>
            </h1>
          </li>
          <li className="items">
            <img className="h-8" src={search} alt="" />
          </li>
          <li className="items">
            <div className="relative">
              <img className="h-8" src={cart} alt="" />
            </div>
          </li>
          <li className="items">
            <img className="h-8" src={user} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

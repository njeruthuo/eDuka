import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleQuantityChange = (id, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return <div className="container mx-auto mt-8 flex justify-center font-bold">Your cart is empty!</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex flex-col space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-lg"
          >
            <img
              className="h-20 w-20 object-cover"
              src={item.img}
              alt={item.name}
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex font-bold place-items-center items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                -
              </button>
              <p className="font-bold">{item.quantity}</p>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className=" ml-8 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h3 className="text-xl text-right mt-8 font-bold">
        Total: ${totalPrice}
      </h3>
      <div className="mt-8 flex justify-between">
        <div>
          <Link
            to="/products"
            className="mt-4 inline-block px-6 py-2 bg-gray-500 text-white rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>

        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

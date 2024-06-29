import { useParams } from "react-router-dom";
import data from "../../data";
import { useState } from "react";
import { useCart } from "../../CartContext";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { id, name } = useParams();
  const { dispatch } = useCart();
  const product = data.data.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: quantity,
      },
    });
  };

  return (
    <div className="container sm:w-2/3 w-4/5 p-2 flex flex-col sm:flex-row items-center mx-auto mt-8 place-items-start gap-8">
      <div className="sm:w-1/3  flex justify-center">
        <img className="object-cover" src={product.img} alt={product.name} />
      </div>
      <div className="sm:w-2/3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <p className="mt-2 text-gray-500 font-bold">
          $
          {(quantity === 1 ? product.price : product.price * quantity).toFixed(
            2
          )}
        </p>

        <div className="mt-6 flex border border-orange-300 rounded-lg flex-col w-full items-center py-2">
          <div id="quantity" className="flex space-x-8 place-items-center">
            <button
              onClick={() =>
                setQuantity(quantity === 1 ? 1 : (prev) => prev - 1)
              }
            >
              -
            </button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>

          <div className="mt-4">
            <button
              className="bg-orange-500 px-6 py-2 rounded-lg text-white font-bold text-sm hover:bg-orange-400"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

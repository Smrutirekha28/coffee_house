import React, { useEffect, useState } from "react";
import axios from "axios";

const Menue = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API}/product`);
        setProducts(res.data.products || res.data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  // Add to Cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.product._id === product._id);

    if (existing) {
      increaseQuantity(product._id);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.product._id !== id));
  };

  // Calculate total
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  // Checkout
  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      await axios.post(
        `${API}/order/create`,
        {
          items: cart.map((item) => ({
            product: item.product._id,
            quantity: item.quantity,
          })),
          totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Order placed successfully ☕🔥");
      setCart([]);
    } catch (error) {
      console.log(error);
      alert("Checkout failed");
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Products Section */}
        <div
          className={
            cart.length > 0
              ? "md:col-span-2 grid md:grid-cols-2 gap-6"
              : "md:col-span-3 grid md:grid-cols-3 gap-6"
          }
        >
          {products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-200 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded mb-3"
                />
              )}

              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="font-bold mt-2">₹{product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-yellow-400 px-4 py-2 rounded font-semibold hover:bg-yellow-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        {cart.length > 0 && (
          <div className="border p-6 rounded-xl shadow-lg h-fit sticky top-6">
            <h3 className="text-xl font-bold mb-4">Your Cart 🛒</h3>

            {cart.map((item) => (
              <div key={item.product._id} className="mb-4 border-b pb-3">
                <div className="flex justify-between font-medium">
                  <span>{item.product.name}</span>
                  <button
                    onClick={() => removeItem(item.product._id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.product._id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.product._id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>

                  <span>₹{item.product.price * item.quantity}</span>
                </div>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{totalPrice}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menue;

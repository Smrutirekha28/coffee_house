import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/product`);
      setProducts(res.data.products);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`${API}/product/update/${editId}`, formData);
        setEditId(null);
      } else {
        await axios.post(`${API}/product/add`, formData);
      }

      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
      });

      fetchProducts();
    } catch (error) {
      console.log("Error saving product", error);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/product/delete/${id}`);
      fetchProducts();
    } catch (error) {
      console.log("Error deleting product", error);
    }
  };

  // Edit
  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product._id);
  };

  return (
    <div className="min-h-screen">
      {/* FORM CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <h3 className="text-lg font-semibold mb-4">
          {editId ? "Update Product" : "Add New Product"}
        </h3>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            {editId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>

                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>

                <p className="font-bold mt-3 text-yellow-600">
                  ₹{product.price}
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No Products Found</p>
        )}
      </div>
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const API = import.meta.env.VITE_BASE_URL;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Orders
  const fetchOrders = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.get(`${API}/order/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(res.data.orders || res.data);
    } catch (error) {
      console.log("Error fetching orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update Status
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API}/order/status/${orderId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchOrders();
    } catch (error) {
      console.log("Error updating status", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "preparing":
        return "bg-blue-100 text-blue-700";
      case "completed":
        return "bg-green-100 text-green-700";
      case "canceled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div>
      {/* 🔥 Skeleton Loader */}
      {loading && (
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 animate-pulse"
            >
              <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>

              <div className="space-y-3 mb-4">
                <div className="h-16 bg-gray-200 rounded-lg"></div>
                <div className="h-16 bg-gray-200 rounded-lg"></div>
              </div>

              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      )}

      {/* 🔥 Orders */}
      {!loading && orders.length === 0 && (
        <p className="text-gray-500">No orders found</p>
      )}

      {!loading && (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    Order ID: {order._id.slice(-6)}
                  </h3>

                  {order.user && (
                    <p className="text-sm text-gray-600 mt-1">
                      👤 {order.user.name} | {order.user.email} |{" "}
                      {order.user.phone}
                    </p>
                  )}
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3 mb-4">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      {item.product?.image && (
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-14 h-14 object-cover rounded-lg"
                        />
                      )}

                      <div>
                        <p className="font-medium">
                          {item.product?.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          ₹{item.product?.price} × {item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="font-semibold">
                      ₹{item.product?.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center border-t pt-4">
                <div className="font-bold text-lg">
                  Total: ₹{order.totalPrice}
                </div>

                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="border p-2 rounded-lg bg-white"
                >
                  <option value="pending">Pending</option>
                  <option value="preparing">Preparing</option>
                  <option value="completed">Completed</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

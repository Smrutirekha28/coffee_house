import React, { useState } from "react";
import Products from "../../components/admin/Products";
import Orders from "../../components/admin/Orders";
import { Link } from "react-router";
import logo from "../../assets/logo.avif";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  const renderComponent = () => {
    switch (activeTab) {
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      default:
        return <Products />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-green-900 text-white p-6 space-y-4">
        <Link to="/">
          <img
            className="rounded-full w-16 m-auto mb-2"
            src={logo}
            alt=""
          />{" "}
        </Link>

        <button
          onClick={() => setActiveTab("products")}
          className={`block w-full text-left px-4 py-2 rounded-lg ${
            activeTab === "products"
              ? "bg-yellow-400 text-black"
              : "hover:bg-green-700"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("orders")}
          className={`block w-full text-left px-4 py-2 rounded-lg ${
            activeTab === "orders"
              ? "bg-yellow-400 text-black"
              : "hover:bg-green-700"
          }`}
        >
          Orders
        </button>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;

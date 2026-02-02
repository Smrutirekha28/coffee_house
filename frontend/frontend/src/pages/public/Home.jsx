import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')] bg-cover bg-center h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Freshly Brewed <br /> Coffee Everyday ☕
          </h1>

          <p className="mt-6 text-lg max-w-lg text-gray-200">
            Experience the perfect blend of aroma, taste, and comfort. Crafted
            with love, served with warmth.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/menu"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Explore Menu
            </Link>

            <Link
              to="/login"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose Us?
          </h2>

          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            We craft every cup with passion, precision, and premium ingredients
            to give you an unforgettable coffee experience.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-100 text-3xl">
                ☕
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Beans</h3>
              <p className="text-gray-600 leading-relaxed">
                We source the finest roasted beans to ensure rich aroma and bold
                flavor in every sip.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-100 text-3xl">
                🪑
              </div>
              <h3 className="text-xl font-semibold mb-3">Cozy Atmosphere</h3>
              <p className="text-gray-600 leading-relaxed">
                A warm and relaxing environment perfect for work, meetings, or
                catching up with friends.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-100 text-3xl">
                🚚
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy your favorite coffee delivered fresh and hot, right at
                your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Best Sellers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Cappuccino",
                price: "₹180",
                image:
                  "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
              },
              {
                name: "Latte",
                price: "₹200",
                image:
                  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
              },
              {
                name: "Mocha",
                price: "₹220",
                image:
                  "https://images.unsplash.com/photo-1511920170033-f8396924c348",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-green-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Perfect Cup?</h2>
        <p className="mb-6 text-gray-200">
          Order now and enjoy the best coffee experience.
        </p>

        <Link
          to="/menu"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Order Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Coffee House. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

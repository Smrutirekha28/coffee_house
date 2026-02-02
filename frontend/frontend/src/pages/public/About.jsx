import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Coffee Shop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Brewing Moments, <br /> One Cup at a Time ☕
          </h1>

          <p className="max-w-xl text-lg text-gray-200 mb-8">
            Our journey began with a simple passion — to serve coffee that
            brings people together. Every cup tells a story of warmth, comfort,
            and connection.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Discover Our Story
          </button>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Coffee shop"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-6">Crafted With Passion</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our journey began with a simple idea — to serve the perfect cup of
            coffee made from the finest beans. We carefully select, roast, and
            brew every batch to deliver a rich and smooth flavor.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you're here to work, relax, or catch up with friends, our
            coffee house is your second home.
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver premium quality coffee with exceptional service,
              creating a warm and welcoming atmosphere for everyone.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a beloved coffee destination where people connect,
              create memories, and enjoy the finest coffee experience.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Journey So Far</h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">5+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">10K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">50+</h3>
            <p className="text-gray-600">Menu Items</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">100%</h3>
            <p className="text-gray-600">Fresh Ingredients</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-green-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Taste the Difference?
        </h2>
        <p className="mb-6 text-gray-200">
          Explore our menu and enjoy your perfect brew today.
        </p>

        <Link
          to="/menu"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Explore Menu
        </Link>
      </section>
    </div>
  );
};

export default About;

import React from 'react';

const Features = () => (
  <section className="py-16 px-4 bg-gray-50" id="features">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Green Construction Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly Materials</h3>
          <p>We use sustainable, recycled, and low-impact materials in every project.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
          <p>Our designs maximize energy savings and reduce carbon footprints.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Smart Technology</h3>
          <p>Integrating smart systems for water, energy, and waste management.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;

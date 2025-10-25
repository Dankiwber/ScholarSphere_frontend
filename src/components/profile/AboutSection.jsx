import React from "react";

const AboutSection = ({ about }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">About</h2>
      <p className="text-gray-600 leading-relaxed">{about}</p>
    </div>
  );
};

export default AboutSection;

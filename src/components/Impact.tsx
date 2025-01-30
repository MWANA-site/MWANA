import React from "react";
import "./Impact.css";

export default function Impact() {
  const stats = [
    { icon: "❤️", value: "10+", label: "Enfants Soutenus" },
    { icon: "👥", value: "5+", label: "Associations Partenaires" },
    { icon: "🏠", value: "2+", label: "Orphelinats" },
    { icon: "✨", value: "100%", label: "Transparence" },
  ];

  return (
    <section id="impact">
      <h2>Notre Impact</h2>
      <div className="grid">
        {stats.map((stat, index) => (
          <div key={index} className="impact-item bg-white">
            <span className="icon">{stat.icon}</span>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

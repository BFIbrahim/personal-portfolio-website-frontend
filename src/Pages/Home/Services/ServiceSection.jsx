import React from "react";
import { FaLaptopCode, FaDatabase, FaFigma, FaWordpress } from "react-icons/fa";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "Custom Frontend Website Development",
      desc: "I create fast, responsive, and fully custom websites that reflect your brand and help your business grow.",
      icon: <FaLaptopCode size={40} className="text-primary" />,
      projects: "20+ Projects",
    },
    {
      id: 2,
      title: "Fullstack Website Development",
      desc: "I build complete MERN stack websites with dynamic front-end, secure back-end, and fully functional admin dashboards.",
      icon: <FaDatabase size={40} className="text-primary" />,
      projects: "20+ Projects",
    },
    {
      id: 3,
      title: "Convert PSD, Figma, XD to React.JS/Next.JS Website",
      desc: "I convert Figma, XD, or PSD designs into clean, modern and responsive React/Next.js websites with optimized code.",
      icon: <FaFigma size={40} className="text-primary" />,
      projects: "15+ Projects",
    },
    {
      id: 4,
      title: "WordPress Website Development",
      desc: "I design and develop professional, fully responsive WordPress websites that are fast, secure, and easy to manage.",
      icon: <FaWordpress size={40} className="text-primary" />,
      projects: "5+ Projects",
    },
  ];

  return (
    <section className="py-16 bg-secondary text-accent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          My Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-base-100 shadow rounded-lg p-8 border border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{s.icon}</div>

              <h3 className="text-xl font-semibold mb-3 text-primary">
                {s.title}
              </h3>

              <p className="text-accent leading-relaxed mb-6">{s.desc}</p>

              <button className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                {s.projects}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

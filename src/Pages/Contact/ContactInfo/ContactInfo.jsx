import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = {
    location: "Naogaon, Rajshahi, Tilakpur – 5942 – Bangladesh",
    email: "mdibrahimhossain3@yahoo.com",
    phone: "+8801956-633205",
    social: [
      { Icon: FaLinkedin, href: "#", color: "bg-[#0A66C2]" },
      { Icon: FaGithub, href: "#", color: "bg-[#181717]" },
      { Icon: FaTwitter, href: "#", color: "bg-[#1DA1F2]" },
      { Icon: FaFacebook, href: "#", color: "bg-[#4267B2]" },
      { Icon: FaYoutube, href: "#", color: "bg-[#FF0000]" },
    ],
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Panel */}
          <div className="p-8 rounded-lg shadow-xl bg-secondary border border-primary">
            <div className="mb-8">
              <div className="flex items-start text-primary mb-2">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-accent ml-8 leading-relaxed">{contactDetails.location}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-start text-primary mb-2">
                <FaEnvelope className="w-5 h-5 mr-3 mt-1" />
                <h3 className="text-xl font-semibold">Email & Phone</h3>
              </div>
              <p className="text-accent ml-8">Email: {contactDetails.email}</p>
              <p className="text-accent ml-8">Phone: {contactDetails.phone}</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 ml-8 pt-4">
              {contactDetails.social.map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-md text-white transition-transform duration-300 hover:scale-110 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:pt-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Feel Free To Connect
            </h2>

            <p className="text-accent leading-relaxed mb-6">
              I’m always open to exciting new opportunities, collaborations, and meaningful conversations.
              Whether you have a project in mind or simply want to connect – feel free to reach out.
              I usually respond shortly and would love to discuss how we can create something impactful.
            </p>

            <p className="text-lg font-semibold mb-8 text-primary">
              – Let's build something great that has never existed before.
            </p>

            <a
              href={`mailto:${contactDetails.email}`}
              className="btn px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-accent transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

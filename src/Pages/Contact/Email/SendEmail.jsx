import React, { useState } from "react";
import { FaEnvelope, FaUser, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

const SendEmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_l6q48cf",   
        "template_6g69jlc",     
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ibrahimhossain3@yahoo.com",
        },
        "ZGY27DwHJzqxmPlWM" 
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Send Me a Message
        </h2>

        <form
          onSubmit={handleSend}
          className="p-8 bg-white border border-primary rounded-xl shadow-lg"
        >
          {/* Name */}
          <label className="block mb-5">
            <span className="flex items-center text-primary font-semibold mb-2">
              <FaUser className="mr-2" /> Your Name
            </span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-secondary text-accent"
            />
          </label>

          {/* Email */}
          <label className="block mb-5">
            <span className="flex items-center text-primary font-semibold mb-2">
              <FaEnvelope className="mr-2" /> Your Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-secondary text-accent"
            />
          </label>

          {/* Message */}
          <label className="block mb-5">
            <span className="flex items-center text-primary font-semibold mb-2">
              <FaCommentDots className="mr-2" /> Message
            </span>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea textarea-bordered w-full h-32 bg-secondary text-accent"
            ></textarea>
          </label>

          {/* Status */}
          {status === "sending" && (
            <p className="text-blue-600 mb-4">Sending...</p>
          )}
          {status === "success" && (
            <p className="text-green-600 mb-4">
              ✔ Your message has been sent!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 mb-4">
              Failed to send. Try again later.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-primary text-white hover:bg-accent w-full flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default SendEmail;

import React from "react";
import img from "../../../assets/Ibrahi2.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto md:px-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <div className="w-full text-center md:text-left">
            <p className="text-xl text-primary font-medium tracking-wide">
              Hi, I am
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mt-2">
              Ibrahim Hossain
            </h1>

            <p className="text-primary text-lg mt-4 mb-8 md:max-w-lg">
              <span className="font-semibold text-primary text-xl">Web Developer</span> — I love
              building digital experiences that are fast, modern, and user-focused.
              Turning ideas into powerful web applications is what excites me the most.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/Md. Ibrahim Hossain - Full Stack developer - resume.pdf"
                download="Md. Ibrahim Hossain - Full Stack developer - resume.pdf"
                className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition-all cursor-pointer"
              >
                Download Resume
              </a>

              <Link to='/contact'><button className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer">
                Contact Me
              </button></Link>
            </div>

            <div className="flex justify-center md:justify-start gap-5 mt-8">
              <Link to="https://www.linkedin.com/in/md-ibrahim-hossain-76918836b" target="_blank">
                <FaLinkedin className="text-3xl text-primary hover:text-accent transition" />
              </Link>

              <Link to="https://github.com/BFIbrahim" target="_blank">
                <FaGithub className="text-3xl text-primary hover:text-accent transition" />
              </Link>

              <Link to="https://www.facebook.com/BFIbrahiMM" target="_blank">
                <FaFacebook className="text-3xl text-primary hover:text-accent transition" />
              </Link>

              <Link to="https://x.com/MdIbrahim361" target="_blank">
                <FaXTwitter className="text-3xl text-primary hover:text-accent transition" />
              </Link>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <div className="relative w-80 md:w-96 group">
              <div className="absolute inset-0 rounded-3xl bg-primary opacity-20 blur-2xl group-hover:blur-3xl transition-all"></div>

              <img
                src={img}
                alt="Ibrahim Hossain"
                className="relative z-10 w-full rounded-3xl shadow-xl object-cover object-top 
                group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

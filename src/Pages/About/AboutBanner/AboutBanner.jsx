import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const AboutBanner = () => {
    return (
        <section className="py-20 bg-secondary text-accent">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                <div className="text-center">
                    <img
                        src="https://i.ibb.co.com/1fsX0vGV/Profile-edited-2.jpg"
                        alt="Md. Ibrahim Hossain"
                        className="w-72 h-72 object-cover rounded-full mx-auto border-4 border-primary shadow-lg"
                    />

                    <h2 className="text-3xl font-bold text-primary mt-6">
                        Md. Ibrahim Hossain
                    </h2>

                    <p className="text-lg font-medium">Web Developer</p>

                    <div className="mt-6 space-y-1">
                        <p className="font-semibold">Contact Info:</p>
                        <p>Email: <span className="font-medium">mdibrahimhossain3@yahoo.com</span></p>
                        <p>Phone: <span className="font-medium">+8801956-633205</span></p>
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                        <a
                            href="https://www.linkedin.com/in/md-ibrahim-hossain-76918836b"
                            className="text-primary text-2xl hover:text-accent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/BFIbrahim"
                            className="text-primary text-2xl hover:text-accent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://facebook.com/BFIbrahiMM"
                            className="text-primary text-2xl hover:text-accent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://x.com/MdIbrahim361"
                            className="text-primary text-2xl hover:text-accent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaXTwitter />
                        </a>
                    </div>

                </div>

                <div className="space-y-6">
                    <p className="mb-3">I am a passionate <span className="font-semibold">Web Application Developer</span> with experience in front-end and full-stack development. I enjoy turning ideas into user-friendly web applications that are both functional and visually engaging.</p>

                    <p> I focus on creating scalable and efficient solutions that help businesses grow and stand out online. With attention to detail and a love for learning, I aim to deliver projects that truly make an impact.</p>

                    <p className="text-lg font-semibold text-primary">
                        — I truly enjoy bringing ideas to life by building things that didn’t exist before.
                    </p>

                    <Link to='/contact'><button className="btn bg-primary text-white hover:bg-primary/90 px-8">
                        Contact me
                    </button></Link>
                </div>

            </div>
        </section>
    );
};

export default AboutBanner;

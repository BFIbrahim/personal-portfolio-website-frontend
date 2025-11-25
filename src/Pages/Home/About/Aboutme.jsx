import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                    About Me
                </h2>

                <div className="border border-primary rounded-2xl p-8 md:p-12 bg-white shadow-md">
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Who I am?</h3>

                            <p className="text-gray-700 leading-7 mb-6">
                                <p className="mb-3">I am a passionate <span className="font-semibold">Web Application Developer</span> with experience in front-end and full-stack development. I enjoy turning ideas into user-friendly web applications that are both functional and visually engaging.</p>

                                <p> I focus on creating scalable and efficient solutions that help businesses grow and stand out online. With attention to detail and a love for learning, I aim to deliver projects that truly make an impact.</p>
                            </p>
                           <a
                                href="/Md. Ibrahim Hossain - Full Stack developer - resume.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg shadow hover:bg-primary/90 transition"
                            >
                                <FaDownload />
                                Download Resume
                            </a>
                        </div>

                        <div className="flex md:justify-end">
                            <ul className="text-lg space-y-3 text-primary">
                                <li><span className="font-semibold text-accent">Name:</span> Ibrahim Hossain</li>
                                <li><span className="font-semibold text-accent">Nationality:</span> Bangladeshi</li>
                                <li><span className="font-semibold text-accent">Phone:</span> +880 1956-633205</li>
                                <li><span className="font-semibold text-accent">Email:</span> ibrahimhossain3@yahoo.com</li>
                                <li><span className="font-semibold text-accent">Experience:</span> 1+ Years</li>
                                <li><span className="font-semibold text-accent">Language:</span> English</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

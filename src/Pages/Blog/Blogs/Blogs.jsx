import React from "react";

const ComingSoon = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-secondary text-primary px-6">
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-primary">
          Coming <span className="text-accent">Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-primary/80 mb-10 max-w-xl mx-auto">
          I’m currently working on this page. Stay tuned for updates!
        </p>

        {/* Email Notify Input */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered bg-white text-black w-full md:w-72"
          />
          <button className="btn bg-primary text-white border-none hover:bg-primary/80">
            Notify Me
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-sm text-accent">
          © {new Date().getFullYear()} Ibrahim Hossain. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;

import React from "react";

const Skills = () => {
  const mainSkills = [
    "JavaScript",
    "ReactJS",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML5",
    "CSS3",
    "WordPress",
  ];

  const tools = [
    "Git",
    "GitHub",
    "Firebase",
    "Figma",
    "DevTools",
    "VS Code",
    "AI Tools",
    "Axios",
    "JWT",
    "CLI"
  ];

  return (
    <section className="py-16 bg-secondary text-accent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-primary mb-4">Skills</h2>
        <p className="text-lg mb-4">
          I work with a variety of technologies and tools to build professional web applications and designs.
        </p>

        {/* Main Skills */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {mainSkills.map((skill, index) => (
              <span
                key={index}
                className="badge badge-primary cursor-default hover:bg-primary-focus transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Tools & Others</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="badge badge-secondary cursor-default hover:bg-secondary-focus transition-colors text-primary font-semibold bg-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

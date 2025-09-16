import React from "react";

const SkillsSection: React.FC = () => {
  const skills = [
    {
      icon: "fa-solid fa-laptop-code",
      title: "Software Development",
      description: (
        <>
          Sharpening my skills in software development using{" "}
          <span className="colour-highlight-1">Python</span> and{" "}
          <span className="colour-highlight-1">PHP</span>. I now have a solid
          understanding of{" "}
          <span className="colour-highlight-2">
            object-oriented programming
          </span>{" "}
          and experience handling data with{" "}
          <span className="colour-highlight-2">JSON</span>.
        </>
      ),
    },
    {
      icon: "fa-solid fa-pen-nib",
      title: "Front-end Development",
      description: (
        <>
          Proficient in building{" "}
          <span className="colour-highlight-2">responsive</span>, user-friendly
          web interfaces using <span className="colour-highlight-1">HTML</span>,{" "}
          <span className="colour-highlight-1">CSS</span>,{" "}
          <span className="colour-highlight-1">JavaScript</span>,{" "}
          <span className="colour-highlight-1">React</span> and{" "}
          <span className="colour-highlight-1">Bootstrap</span>. Actively
          learning more about{" "}
          <span className="colour-highlight-2">UI/UX design</span> and{" "}
          <span className="colour-highlight-2">accessibility</span>.
        </>
      ),
    },
    {
      icon: "fa-solid fa-chart-simple",
      title: "Project Management",
      description: (
        <>
          10+ years experience in the{" "}
          <span className="colour-highlight-2">higher education sector</span>,
          specialised in <span className="colour-highlight-2">operations</span>,{" "}
          <span className="colour-highlight-2">project management</span>,{" "}
          <span className="colour-highlight-2">online learner engagement</span>{" "}
          and <span className="colour-highlight-1">CRM workflow</span>{" "}
          implementation.
        </>
      ),
    },
  ];

  return (
    <section className="primary-section skills" id="skills">
      <h2 className="text-center m-5">MY SKILLS</h2>
      <div className="container px-0">
        <div className="row gx-0 gx-sm-3">
          {skills.map((skill, index) => (
            <div key={index} className="skill col-12 col-sm-6 col-lg-4 mb-3">
              <div className="muted-background border rounded-1 p-3 h-100">
                <div className="d-flex align-items-center">
                  <i className={`symbols ${skill.icon} m-2 m-lg-3`}></i>
                  <h4 className="mb-0">{skill.title}</h4>
                </div>
                <div>
                  <p className="p-2 p-lg-3">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <a
            href="/about#experience"
            title="More about Chardi"
            className="btn outline-button shadow"
          >
            My Experience
          </a>
        </div>
      </div>
      <div className="text-center">
        <a href="#featured">
          <i className="fa-solid fa-arrow-down arrow-icon"></i>
        </a>
      </div>
    </section>
  );
};

export default SkillsSection;

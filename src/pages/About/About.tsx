import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";

const About: React.FC = () => {
  const experienceData = [
    {
      id: "flush-collapseOne",
      title: "Careers Associate & Developer @ Freelance",
      period: "2025 - present",
      content: (
        <>
          I'm currently working on a variety of personal coding projects, from{" "}
          <span className="colour-highlight-2">app development</span> to{" "}
          <span className="colour-highlight-2">CRM design</span>, with a focus
          on sharpening my <span className="colour-highlight-1">React.js</span>{" "}
          and <span className="colour-highlight-1">PHP</span> skills.
          <br />
          <br />
          In addition to my technical work, I'm a dedicated{" "}
          <span className="colour-highlight-2">career coach</span>, passionate
          about helping individuals achieve their professional goals. My career
          path so far has enabled me to develop expertise in{" "}
          <span className="colour-highlight-2">coaching</span>,{" "}
          <span className="colour-highlight-2">project management</span>,{" "}
          <span className="colour-highlight-2">strategic planning</span>,{" "}
          <span className="colour-highlight-2">leadership</span>,{" "}
          <span className="colour-highlight-2">change management</span> and{" "}
          <span className="colour-highlight-2">people development</span>. I
          enjoy enabling young people to create their own opportunities.
        </>
      ),
    },
    {
      id: "flush-collapseTwo",
      title: "Head of Operations @ Pagoda Projects Ltd",
      period: "2014 - 2025",
      content: (
        <>
          As part of the leadership team at{" "}
          <a
            href="https://pagodaprojects.com/"
            target="_blank"
            rel="noreferrer"
          >
            Pagoda Projects Ltd
          </a>{" "}
          for over 5 years, I have experience in{" "}
          <span className="colour-highlight-2">strategic operations</span>,{" "}
          <span className="colour-highlight-2">international business</span> and
          the{" "}
          <span className="colour-highlight-2">higher education sector</span>.
          <br />
          <br />
          As part of my role I maintained the company's{" "}
          <span className="colour-highlight-2">CRM</span>,{" "}
          <span className="colour-highlight-2">data-management</span> and{" "}
          <span className="colour-highlight-2">internal communication</span>{" "}
          systems by building internal{" "}
          <span className="colour-highlight-2">workflows</span> using{" "}
          <span className="colour-highlight-1">PHP</span>,{" "}
          <span className="colour-highlight-1">HubSpot</span>,{" "}
          <span className="colour-highlight-1">ClickUp</span>,{" "}
          <span className="colour-highlight-1">Podio</span>, and{" "}
          <span className="colour-highlight-1">WordPress plugins</span>.
          <br />
          <br />I curated{" "}
          <span className="colour-highlight-2">learning content</span> on a
          WordPress-based platform and{" "}
          <span className="colour-highlight-2">
            implemented gamification features
          </span>{" "}
          to increase learner engagement. Working on this made me realise how
          much I care about the role of tech in education. It inspired me to
          level up my coding skills to build better, more{" "}
          <span className="colour-highlight-2">
            accessible learning experiences
          </span>
          .
        </>
      ),
    },
  ];

  return (
    <div className="about-page">
      <Header currentPage="about" />
      <section>
        <div className="about content-container container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h3>👋 Hi, I'm</h3>
                <h1 className="mb-4">Clare</h1>
                <h3 className="mb-4">Manchester-based front-end developer</h3>
                <p className="mb-5">
                  I'm a newcomer to coding with over 10 years of project
                  management and problem solving experience in the higher
                  education sector. I'm working toward becoming a developer who
                  values maintainable code, thoughtful user interfaces and
                  accessibility to online and app-based learning. When I'm not
                  coding, I spend my time exploring new places, swimming,
                  creating Scavenger Hunts, learning new languages and writing
                  songs on the ukulele.
                </p>
                <div className="d-flex">
                  <a
                    href="/work"
                    title="My Projects"
                    className="btn outline-button shadow"
                  >
                    My projects
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <img
                  src="/images/clare-recent-photo.jpg"
                  alt="Clare - Chardi"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#experience">
            <i className="fa-solid fa-arrow-down arrow-icon"></i>
          </a>
        </div>
      </section>

      <div className="divider"></div>

      <section className="secondary-section">
        <div className="content-container container">
          <h2 className="text-center m-5">EXPERIENCE</h2>
          <div className="experience" id="experience">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {experienceData.map((item, index) => (
                <div key={item.id} className="accordion-item">
                  <p className="accordion-header">
                    <button
                      className="accordion-button collapsed muted-background border rounded-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded="false"
                      aria-controls={item.id}
                    >
                      <div className="d-flex justify-content-between align-items-center w-100 px-3">
                        <span className="text-start">
                          {item.title.includes("@") ? (
                            <>
                              {item.title.split("@")[0]}@{" "}
                              <span className="colour-highlight-1">
                                {item.title.split("@")[1]}
                              </span>
                            </>
                          ) : (
                            item.title
                          )}
                        </span>
                        <span className="text-end">{item.period}</span>
                      </div>
                    </button>
                  </p>
                  <div
                    id={item.id}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="ms-2 ms-lg-4">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center my-4">
              <a
                href="/pdf/chardi-cv.pdf"
                target="_blank"
                title="CV"
                className="btn outline-button shadow"
              >
                My CV
              </a>
            </div>
          </div>
          <div className="text-center">
            <a href="#about-contact">
              <i className="fa-solid fa-arrow-down arrow-icon"></i>
            </a>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="primary-section contact" id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
};

export default About;

import React, { useState, useEffect } from "react";

interface Technology {
  name: string;
  highlight: 1 | 2;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  projectUrl: string;
  alt: string;
}

const FeaturedSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const projects: Project[] = [
    {
      id: 1,
      title: "Dictionary App",
      description:
        'Search any word and watch the dictionary app pull definitions from two powerful APIs. Kick off your day with "Word of the Day" right on the splash screen!',
      image: "/images/dictionary-app-square.png",
      alt: "Dictionary App",
      projectUrl: "https://chardi-dictionary.netlify.app/",
      technologies: [
        { name: "Axios", highlight: 1 },
        { name: "Bootstrap", highlight: 2 },
        { name: "GitHub", highlight: 1 },
        { name: "Netlify", highlight: 2 },
        { name: "React", highlight: 1 },
        { name: "Responsive CSS", highlight: 2 },
        { name: "SheCodes-Dictionary-API", highlight: 1 },
        { name: "Free-Dictionary-API", highlight: 2 },
        { name: "VSCode", highlight: 1 },
      ],
    },
    {
      id: 2,
      title: "Croissant Bakery Design",
      description:
        "All about croissants. A webapp layout design for a bakery or cafe website. Built with HTML and Typescript, made responsive with Bootstrap and CSS.",
      image: "/images/croissant-square.png",
      alt: "Croissant Bakery",
      projectUrl: "https://le-croissant.netlify.app/",
      technologies: [
        { name: "Bootstrap", highlight: 2 },
        { name: "Figma", highlight: 1 },
        { name: "GitHub", highlight: 2 },
        { name: "Lineicons", highlight: 1 },
        { name: "Netlify", highlight: 2 },
        { name: "TypeScript", highlight: 1 },
        { name: "Responsive CSS", highlight: 2 },
        { name: "VSCode", highlight: 1 },
      ],
    },
    {
      id: 3,
      title: "Parkrun Challenge",
      description:
        "A webapp with a map and a list of parkruns in Greater Manchester where runners can track their progress as they complete each run on the challenge.",
      image: "/images/parkrun-square.png",
      alt: "Parkrun Challenge Tracker",
      projectUrl: "https://gm-parkruns.netlify.app/",
      technologies: [
        { name: "GitHub", highlight: 1 },
        { name: "JSON", highlight: 2 },
        { name: "JavaScript", highlight: 1 },
        { name: "Leaflet Maps", highlight: 2 },
        { name: "Local Storage", highlight: 1 },
        { name: "Netlify", highlight: 2 },
        { name: "TailwindCSS", highlight: 1 },
        { name: "VSCode", highlight: 2 },
      ],
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const goToProject = (index: number): void => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const goToPrevious = (): void => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const goToNext = (): void => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const currentProjectData = projects[currentProject];

  return (
    <>
      <div className="divider"></div>
      <section className="secondary-section featured" id="featured">
        <div className="container">
          <div className="row feature align-items-center">
            <div className="col-md-6 d-flex flex-column">
              <div className="order-0">
                <div className="feature-subheading text-center text-md-start">
                  <h2>MY WORK</h2>
                  <h4>
                    Featured Project {currentProject + 1} of {projects.length}
                  </h4>
                </div>
              </div>

              {/* Mobile image */}
              {/* Mobile Carousel Navigation - Above Image */}
              <div className="order-1 d-block d-md-none">
                <div
                  className="carousel-navigation-mobile mb-3 d-flex justify-content-center align-items-center"
                  style={{
                    position: "relative",
                    gap: "40px",
                    zIndex: "10",
                    width: "100%",
                  }}
                >
                  <button
                    onClick={goToPrevious}
                    className="carousel-btn me-3"
                    aria-label="Previous project"
                    style={{
                      background: "var(--my-primary-colour)",
                      color: "var(--my-background-colour)",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      transition: "all 200ms ease-in-out",
                      cursor: "pointer",
                      flexShrink: "0",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background =
                        "var(--my-accent-colour)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background =
                        "var(--my-primary-colour)";
                    }}
                  >
                    ‹
                  </button>

                  <div
                    className="carousel-indicators d-flex mx-3"
                    style={{
                      gap: "8px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToProject(index)}
                        className="indicator-dot"
                        aria-label={`Go to project ${index + 1}`}
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          border: "none",
                          background:
                            index === currentProject
                              ? "var(--my-accent-colour)"
                              : "var(--my-greyed-out-colour)",
                          cursor: "pointer",
                          transition: "all 200ms ease-in-out",
                          padding: "0",
                          margin: "0",
                          flexShrink: "0",
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={goToNext}
                    className="carousel-btn ms-3"
                    aria-label="Next project"
                    style={{
                      background: "var(--my-primary-colour)",
                      color: "var(--my-background-colour)",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      transition: "all 200ms ease-in-out",
                      cursor: "pointer",
                      flexShrink: "0",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background =
                        "var(--my-accent-colour)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background =
                        "var(--my-primary-colour)";
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Mobile Image - Below Navigation */}
              <div className="order-2 order-md-0 text-center my-3 d-block d-md-none">
                <div className="image-hover-wrapper">
                  <a
                    href={currentProjectData.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn project-button shadow"
                  >
                    <img
                      src={currentProjectData.image}
                      alt={currentProjectData.alt}
                      className="img-fluid rounded shadow"
                    />
                  </a>
                  <div className="overlay-text">
                    <a
                      href={currentProjectData.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn project-button shadow"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              <div className="order-3">
                <h3
                  className="text-center text-md-start mb-3"
                  style={{ color: "var(--my-accent-colour)", fontSize: "28px" }}
                >
                  {currentProjectData.title}
                </h3>
                <p className="mt-3 text-center text-md-start">
                  {currentProjectData.description}
                </p>
                <h4 className="text-center text-md-start">Built with:</h4>
                <ul className="list-inline text-center text-md-start">
                  {currentProjectData.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className={`list-inline-item colour-highlight-${tech.highlight}`}
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>

                {/* Desktop Carousel Navigation */}
                <div
                  className="carousel-navigation mt-4 d-none d-md-flex justify-content-start align-items-center"
                  style={{
                    position: "relative",
                    gap: "40px",
                    zIndex: "10",
                    width: "fit-content",
                  }}
                >
                  <button
                    onClick={goToPrevious}
                    className="carousel-btn me-3"
                    aria-label="Previous project"
                    style={{
                      background: "var(--my-primary-colour)",
                      color: "var(--my-background-colour)",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      transition: "all 200ms ease-in-out",
                      cursor: "pointer",
                      flexShrink: "0",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background =
                        "var(--my-accent-colour)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background =
                        "var(--my-primary-colour)";
                    }}
                  >
                    ‹
                  </button>

                  <div
                    className="carousel-indicators d-flex mx-3"
                    style={{
                      gap: "8px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToProject(index)}
                        className="indicator-dot"
                        aria-label={`Go to project ${index + 1}`}
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          border: "none",
                          background:
                            index === currentProject
                              ? "var(--my-accent-colour)"
                              : "var(--my-greyed-out-colour)",
                          cursor: "pointer",
                          transition: "all 200ms ease-in-out",
                          padding: "0",
                          margin: "0",
                          flexShrink: "0",
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={goToNext}
                    className="carousel-btn ms-3"
                    aria-label="Next project"
                    style={{
                      background: "var(--my-primary-colour)",
                      color: "var(--my-background-colour)",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      transition: "all 200ms ease-in-out",
                      cursor: "pointer",
                      flexShrink: "0",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background =
                        "var(--my-accent-colour)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background =
                        "var(--my-primary-colour)";
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop image */}
            <div className="col-md-6 d-none d-md-block text-center">
              <div className="image-hover-wrapper">
                <img
                  src={currentProjectData.image}
                  alt={currentProjectData.alt}
                  className="img-fluid rounded shadow"
                  style={{
                    transition: "all 500ms ease-in-out",
                    opacity: "1",
                  }}
                />
                <div className="overlay-text">
                  <a
                    href={currentProjectData.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn project-button shadow"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center my-4">
            <a href="/work" className="btn outline-button shadow">
              More Projects
            </a>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact">
            <i className="fa-solid fa-arrow-down arrow-icon"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;

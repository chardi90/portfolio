import React from "react";

const FeaturedSection: React.FC = () => {
  const technologies = [
    { name: "Axios", highlight: 1 },
    { name: "Bootstrap", highlight: 2 },
    { name: "GitHub", highlight: 1 },
    { name: "Netlify", highlight: 2 },
    { name: "React", highlight: 1 },
    { name: "Responsive CSS", highlight: 2 },
    { name: "SheCodes-Dictionary-API", highlight: 1 },
    { name: "Free-Dictionary-API", highlight: 2 },
    { name: "VSCode", highlight: 1 },
  ];

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
                  <h4>Featured Project</h4>
                </div>
              </div>
              <div className="order-1 order-md-0 text-center my-3 d-block d-md-none">
                <div className="image-hover-wrapper">
                  <a
                    href="https://chardi-dictionary.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn project-button shadow"
                  >
                    <img
                      src="/images/dictionary-app-square.png"
                      alt="Dictionary App"
                      className="img-fluid rounded shadow"
                    />
                  </a>
                  <div className="overlay-text">
                    <a
                      href="https://chardi-dictionary.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn project-button shadow"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <p className="mt-3 text-center text-md-start">
                  Search any word and watch the dictionary app pull definitions
                  from two powerful APIs. Kick off your day with "Word of the
                  Day" right on the splash screen — perfect for word nerds,
                  curious minds, and lovers of language alike!
                </p>
                <h4 className="text-center text-md-start">Built with:</h4>
                <ul className="list-inline text-center text-md-start">
                  {technologies.map((tech, index) => (
                    <li
                      key={index}
                      className={`list-inline-item colour-highlight-${tech.highlight}`}
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block text-center">
              <div className="image-hover-wrapper">
                <img
                  src="/images/dictionary-app-square.png"
                  alt="Dictionary App"
                  className="img-fluid rounded shadow"
                />
                <div className="overlay-text">
                  <a
                    href="https://chardi-dictionary.netlify.app/"
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

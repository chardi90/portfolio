import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface Project {
  id: string;
  title: string;
  image: string;
  href: string;
  technologies: string[];
  icons: string[];
}

const Work: React.FC = () => {
  const projects: Project[] = [
    {
      id: "limerick-generator",
      title: "AI Limerick Generator",
      image: "/images/limerick-generator-square.png",
      href: "https://limerick-generator.netlify.app/",
      technologies: [
        "Axios",
        "GitHub",
        "Javascript",
        "Netlify PaaS",
        "SheCodes AI API",
        "VSCode",
      ],
      icons: [
        "fa-brands fa-html5",
        "fa-brands fa-css3",
        "fa-brands fa-js",
        "fa-solid fa-robot",
      ],
    },
    {
      id: "plotly-dashboard",
      title: "Plotly Impact Data Dashboard",
      image: "/images/python-impact-report-square.png",
      href: "https://chardi-dash-test.streamlit.app/",
      technologies: [
        "Data CSV",
        "Pandas",
        "Python",
        "Plotly",
        "Streamlit PaaS",
      ],
      icons: [
        "fa-brands fa-python",
        "fa-solid fa-file-csv",
        "fa-solid fa-chart-simple",
      ],
    },
    {
      id: "weather-app",
      title: "JS Weather App",
      image: "/images/forecast-app-square.png",
      href: "https://forecast-on-react.netlify.app/",
      technologies: [
        "Axios",
        "GitHub",
        "Javascript",
        "Netlify PaaS",
        "SheCodes Weather API",
        "VSCode",
      ],
      icons: [
        "fa-brands fa-html5",
        "fa-brands fa-css3",
        "fa-brands fa-react",
        "fa-brands fa-bootstrap",
        "fa-solid fa-robot",
      ],
    },
    {
      id: "population-plot",
      title: "Population Matplotlib",
      image: "/images/python-population-plot-square.png",
      href: "https://github.com/chardi90/population-plot",
      technologies: ["CSV data", "Python", "Matplotlib Pyplot", "Replit"],
      icons: [
        "fa-brands fa-python",
        "fa-solid fa-file-csv",
        "fa-solid fa-chart-simple",
      ],
    },
    {
      id: "world-clock",
      title: "World Clock",
      image: "/images/world-clock-square.png",
      href: "https://time-zones-clock.netlify.app/",
      technologies: [
        "Ajax",
        "GitHub",
        "Javascript",
        "Moment.js",
        "Netlify PaaS",
        "VSCode",
      ],
      icons: ["fa-brands fa-html5", "fa-brands fa-css3", "fa-brands fa-js"],
    },
    {
      id: "road-trip-planner",
      title: "AI Road Trip Planner",
      image: "/images/python-ai-road-trip-planner-square.png",
      href: "https://github.com/chardi90/itinerary-generator",
      technologies: [
        "Google Colab",
        "Python",
        "Rich Markdown",
        "SheCodes AI API",
      ],
      icons: ["fa-brands fa-python", "fa-solid fa-robot"],
    },
    {
      id: "scavenger-hunt",
      title: "Scavenger Hunt Webpage",
      image: "/images/scavenger-hunt-square.png",
      href: "https://scavenger-hunters.netlify.app/",
      technologies: [
        "Canva Img Designs",
        "GitHub",
        "Netlify PaaS",
        "Responsive CSS",
        "VSCode",
      ],
      icons: ["fa-brands fa-html5", "fa-brands fa-css3"],
    },
    {
      id: "dictionary-app",
      title: "Dictionary App",
      image: "/images/dictionary-app-square.png",
      href: "https://chardi-dictionary.netlify.app/",
      technologies: [
        "Axios",
        "Bootstrap",
        "GitHub",
        "Netlify PaaS",
        "React",
        "Responsive CSS",
        "SheCodes Dictionary API",
        "VSCode",
      ],
      icons: [
        "fa-brands fa-html5",
        "fa-brands fa-css3",
        "fa-brands fa-react",
        "fa-brands fa-bootstrap",
        "fa-solid fa-robot",
      ],
    },
  ];

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="col-md-6 mb-4 project-title">
      <div className="image-hover-wrapper">
        <a
          href={project.href}
          title={project.title}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid mb-3 rounded shadow"
          />
          <div className="overlay-text">
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
              <li className="btn text-center project-button ps-3 mt-2 shadow">
                View Project
              </li>
            </ul>
          </div>
        </a>
      </div>
      <h4 className="text-center m-2">
        <a
          href={project.href}
          title={project.title}
          target="_blank"
          rel="noreferrer"
        >
          {project.title}
        </a>
      </h4>
      <p className="text-center d-flex justify-content-evenly">
        {project.icons.map((icon, index) => (
          <i key={index} className={`${icon} symbols`}></i>
        ))}
      </p>
    </div>
  );

  // Group projects into rows of 2
  const projectRows = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectRows.push(projects.slice(i, i + 2));
  }

  return (
    <div className="work-page">
      <Header currentPage="work" />
      <div className="content-container container">
        <div className="content">
          <h1 className="mb-5 text-center">My Projects</h1>
          <p className="mb-5 text-center">
            Click on any of the projects below to test them out. Enjoy perusing!
          </p>
          {projectRows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;

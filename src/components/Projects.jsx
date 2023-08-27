import Devicate from "../assets/images/devicate.png";
import ProBox from "./ProBox";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-container">
            <div className="projects-container__title">
              <h3>Projects</h3>
              <h2>Each project is a unique piece of development</h2>
            </div>
            <div className="projects-grid">
              <ProBox
                title="Devicate"
                img={Devicate}
                description="A map pinning traveling app that can pin points of interest and document tourist reviews."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/jpzambranoleon/mern-travel-app"
                demo="https://mern-travel-app-three.vercel.app/"
                scrollY="-33%"
                icon="🌍"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

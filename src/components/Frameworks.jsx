import ReactIcon from "../assets/icons/react-js.svg";
import NextIcon from "../assets/icons/next-js.svg";
import NodeIcon from "../assets/icons/node-js.svg";
import MaterialUiIcon from "../assets/icons/material-ui.svg";

const Frameworks = () => {
  const skillsIcons = [
    {
      img: ReactIcon,
      title: "React",
    },
    {
      img: NextIcon,
      title: "NextJs",
    },
    {
      img: NodeIcon,
      title: "NodeJs",
    },
    {
      img: MaterialUiIcon,
      title: "MUI",
    },
  ];

  return (
    <section className="framework-section" id="framework-section">
      {/* overlay */}
      <div className="container">
        <div className="framework-content">
          <div className="framework-content__box">
            <h2>Book a car</h2>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frameworks;

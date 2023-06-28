import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="overlay" data-overlay></div>
        <nav>
          <div className="navbar">
            <div className="navbar-top">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <h1 className="logo">Leone Digitale</h1>
              </Link>
            </div>
            <div className="navbar-right">
              <ul className="navbar__links">
                <li>
                  <Link className="home-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="about-link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="team-link" to="/team">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link className="contact-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="navbar__button">
                <Link className="navbar__button__get-quote" to="/">
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

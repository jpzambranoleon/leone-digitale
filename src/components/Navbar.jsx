import { Link } from "react-router-dom";
import Logo from "../assets/images/bg-blob.png";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="overlay" data-overlay></div>
        <nav className="navbar">
          <div className="navbar-left">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="navbar-left__logo"
            >
              <h1 className="logo-text">Leone Digitale</h1>
              <img src={Logo} className="logo-img" />
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
        </nav>
      </div>
    </header>
  );
}

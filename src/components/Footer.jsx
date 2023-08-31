import {
  Call,
  Facebook,
  Instagram,
  LocationOn,
  Mail,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <ul className="footer-content__1">
              <li>
                <span>LEONE</span> Digitale
              </li>
              <li>
                We offer a big range of design elements for all your design
                needs. We have the perfect app to meet your needs
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link to="#" className="social-link">
                  <Facebook
                    fontSize="large"
                    className="logo-facebook"
                    sx={{ display: "block", pointerEvents: "none" }}
                  />
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link">
                  <Instagram
                    fontSize="large"
                    className="logo-instagram"
                    sx={{ display: "block", pointerEvents: "none" }}
                  />
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link">
                  <Twitter
                    fontSize="large"
                    className="logo-instagram"
                    sx={{ display: "block", pointerEvents: "none" }}
                  />
                </Link>
              </li>
            </ul>
            <p className="copyright">Privacy Policy | © 2023 Leone Digitale</p>
          </div>

          <ul className="footer-content__2">
            <li>Our links</li>
            <li>
              <Link to="#" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className="footer-content__2">
            <li>Contact Us</li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <Call
                  name="call"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </div>

              <div>
                <a href="tel:+2484214313" className="footer-item-link">
                  +248-421-4313
                </a>
              </div>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <Mail
                  name="mail"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </div>

              <div>
                <a href="mailto:info@desinic.com" className="footer-item-link">
                  info@desinic.com
                </a>
              </div>
            </li>
          </ul>

          <ul className="footer-content__2">
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>
            <li>
              <input type="email" placeholder="Enter Email Address"></input>
            </li>
            <li>
              <button className="submit-email">Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import BgImg from "../assets/images/bg-blob.png";

export default function Hero() {
  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-content__text">
            <h4>We Are Product Designer From US</h4>
            <h1>
              Turn your ideas into <span>success</span>
            </h1>
            <p>
              Build apps that look modern and professional while saving you
              precious time.
            </p>
            <div className="hero-content__text__btns">
              <Link
                onClick={bookBtn}
                className="hero-content__text__btns__continue"
                to="/"
              >
                Continue &nbsp; <i className="fa-solid fa-circle-check" />
              </Link>
              <Link className="hero-content__text__btns__learn-more" to="/">
                Learn More &nbsp; <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>

          {/* img */}
          <img src={BgImg} className="hero-content__bg-img" />
        </div>
      </div>
    </section>
  );
}

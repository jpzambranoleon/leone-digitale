import HeroPages from "../components/HeroPages";

export default function Contact() {
  return (
    <section className="contact-page">
      <HeroPages name="Contact" />
      <div className="container">
        <div className="contact-div">
          <div className="contact-div__text">
            <h2>Feel free to get in touch with us.</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a href="/">
              <i className="fa-solid fa-phone"></i>&nbsp; +248-421-4313
            </a>
            <a href="/">
              <i className="fa-solid fa-envelope"></i>&nbsp; info@desinic.com
            </a>
            <a href="/">
              <i className="fa-solid fa-location-dot"></i>&nbsp; Hot Springs,
              Arkansas
            </a>
          </div>
          <div className="contact-div__form">
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

              <label>
                Email <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com"></input>

              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea placeholder="Write Here.."></textarea>

              <button type="submit">
                <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
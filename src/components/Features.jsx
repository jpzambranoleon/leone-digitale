export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <h2 className="h2 section-title underline">Our Features</h2>

        <ul className="features-list">
          <li>
            <div className="features-list__content">
              <div className="icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className="text">
                <h3 className="h3 title">Idea & Analysis</h3>
                <p>
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="features-list__content">
              <div className="icon">
                <i className="fa-solid fa-palette"></i>
              </div>
              <div className="text">
                <h3 className="h3 title">Designing</h3>
                <p>
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <figure class="features-banner">
          <img
            src="./src/assets/images/feautres-banner.png"
            width="369"
            height="318"
            loading="lazy"
            alt="Features Banner"
            class="w-100 banner-animation"
          />
        </figure>

        <ul className="features-list">
          <li>
            <div className="features-list__content">
              <div className="icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="text">
                <h3 className="h3 title">Development</h3>
                <p>
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="features-list__content">
              <div className="icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div className="text">
                <h3 className="h3 title">Testing and Launching</h3>
                <p>
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

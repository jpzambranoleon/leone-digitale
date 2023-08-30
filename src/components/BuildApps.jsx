import { Code, Palette, Settings } from "@mui/icons-material";

export default function BuildApps() {
  return (
    <section className="build-section">
      <div className="container">
        <div className="build-container">
          <div className="build-container__title">
            <h3>Build apps now</h3>
            <h2>Build a beautiful, modern website.</h2>
          </div>

          <div className="build-container__boxes">
            <div className="build-container__boxes__box">
              <div className="box-icon">
                <Code className="icon" />
              </div>
              <h3>Built by developers</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam tempore fugiat perferendis inventore.
              </p>
            </div>

            <div className="build-container__boxes__box">
              <div className="box-icon">
                <Palette className="icon" />
              </div>
              <h3>Designed to be modern</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                ldfasjdfdasl dlfasd.
              </p>
            </div>

            <div className="build-container__boxes__box">
              <div className="box-icon">
                <Settings fontSize="large" className="icon" />
              </div>
              <h3>Free support</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia possimus provident, blanditiis fuga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

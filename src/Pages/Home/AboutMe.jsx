export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/portfolioImage1.JPG" alt="About" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">Recommendations From My Travels</h1>
            <p className="hero--section-description">
              I'm lucky enough to have lived in a few places, so these guides are my way of capturing my recommendations for my friends, family, and others to read.
            </p>
          </div>
        </div>
      </section>
    );
  }
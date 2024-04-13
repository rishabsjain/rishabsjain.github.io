export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/portfolioImage1.JPG" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            I grew up in San Diego and graduated with a Computer Science degree from UCLA's Henry Samueli School of Engineering. 
            I currently work at Palantir Technologies as a Forward Deployed Software Engineer. Previously, I worked at Appfolio as a Software Engineer Intern.
            </p>
            <p className="hero--section-description">
              I really enjoy traveling and these guides were a way for me to centralize all the highlights from these beautiful places.
            </p>
          </div>
        </div>
      </section>
    );
  }
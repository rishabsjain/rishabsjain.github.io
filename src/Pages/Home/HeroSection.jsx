export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hey! I'm Rish Jain </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                            Welcome!
                        </span>{" "}
                    </h1>
                    <p className="hero--section-description">
                         This was a website I made for the various travel guides I make
                    
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/about.jpg" alt="" />
            </div>
        </section>
    )
}
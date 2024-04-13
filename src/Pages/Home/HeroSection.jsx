export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hey, I'm Rish</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                            Full Stack
                        </span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Sample text here.
                        <br /> More text coming here
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/about.jpg" alt="" />
            </div>
        </section>
    )
}
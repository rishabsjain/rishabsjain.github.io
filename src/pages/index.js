import React from "react";
import HeroImage from '../images/heroImage.jpeg'
import AboutImage from '../images/about.jpg'


const Home = () => {
    return (
        <div>
    <section id="about">
        <div class="container mt-4 pt-4">
            <h1 class="text-center">About Me</h1>
                    <img src={AboutImage} class= "imageAboutPage" alt=""/>

                <div class="col-lg-8">
                    <p> I am currently a senior at UCLA, looking for a full-time software engineering role. Currently, I'm working at Appfolio on their Screenings Product as a Software Engineer Intern. At UCLA, I'm currently the Induction Director for <a  href="https://upe.seas.ucla.edu/about">UPE at UCLA</a>.</p>
                    <p> Previously, I was the Operations Co-Director for <a href="https://www.uclaacm.com/"> ACM at UCLA </a> and the Business Director for <a href="https://www.bruinracing.com/baja/"> Bruin Racing Baja SAE</a>.</p>
                    <p> Some of hobbies (in no particular order) include: Spikeball, Soccer, Squash, Longboarding, Chess, Cooking, and Surfing. </p>

                    <div class="row mt-3">
                        <div class="col-md-6">
                            <ul>
                                <li>Hometown: San Diego, CA</li>
                                <li>Email: rishabjain@g.ucla.edu</li>

                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>University: UCLA'2023</li>
                                <li>Major: Computer Science</li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
    </section>
    <footer>
        <span style={{display: 'table', margin: 0 }}>
            <a href="https://www.instagram.com/rish.jain/" class="fa fa-instagram"></a>
            <a href="https://github.com/rishabsjain" class="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/rishabsjain/" class="fa fa-linkedin"></a>
        </span>
    </footer>
        </div>
    );
};
 
export default Home;
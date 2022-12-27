import React from "react";

export default function Home(){
return (
<div>
    <section class="bgimage" id="home">
    <div class="container-fluid">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
            <h2 class="hero_title">Hi, it's me Rish</h2>
            <p class="hero_desc">I am a student at UCLA</p>
        </div>
        </div>
    </div>
    </section>
    <section id="about">
    <div class="container mt-4 pt-4">
        <h1 class="text-center">About Me</h1>
        <div class="row mt-4">
            <div class="col-lg-4">
                <img src="../images/about.jpg" class= "imageAboutPage" alt=""/>
            </div>

            <div class="col-lg-8">
                <p> I am currently a senior at UCLA, looking for a full-time software engineering role. Currently, I'm working at Appfolio on their Screenings Product as a Software Engineer Intern. At UCLA, I'm currently the Induction Director for <a href="https://upe.seas.ucla.edu/about">UPE at UCLA</a>.</p>
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
        </div>
    </section>
</div>);
};

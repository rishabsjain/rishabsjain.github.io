import React from 'react';


export default function NavBar() {
    return (
        <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Rishab Jain</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="index">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="travel">Travel(not done yet)</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="resume">Resume</a>
                </li>
                </ul>
            </div>
            </nav>
        </React.Fragment>
    )
}
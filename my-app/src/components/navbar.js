import React from 'react';


export default function NavBar() {
    return (
        <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Rishab Jain</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href="index">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="travel">Travel(not done yet)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="resume">Resume</a>
                </li>
                </ul>
            </div>
            </nav>
        </React.Fragment>
    )
}
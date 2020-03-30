import React from "react";
import AboutJumbotron from "../components/Jumbotron";
import Profile from "../components/Profile";

function About() {
    return (
        <div className="container">
            <Profile>
                <h1>Clint Gordy</h1>
                <h2>Welcome to my porfolio page</h2>
            </Profile>
            <AboutJumbotron />
        </div>
    );
}

export default About;

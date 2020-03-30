import React from "react";
import { Jumbotron } from "react-bootstrap";

function AboutJumbotron() {
    return (
        <Jumbotron>
            <h1>About Me</h1>
            <p>
                Hi! My name is Clint Gordy and I like to do a lot of wierd
                things. From gaming to sim racing to hockey, I like to stay busy
                and make sure life is always interesting. If you asked me three
                years ago what I were to do today, I wouldn't have told you
                software development. But life has a certain way of throwing
                very fun things at you and here I am, and here's my porfolio :)
            </p>
            <p>
                I was born and raised in Southern California in a small town
                called Rancho Cucamonga. If you've heard of it in spaces beyond
                the popular TV show Workaholics, I would be very surprised. For
                college, I went to school at the University of California, Santa
                Barbara, where I studied Global and International Studies.
                Haven't really done much Workaholics related to that, but hey,
                that's life.
            </p>

            <p>
                I am really passionate about building things into a living,
                breathing reality. I'm not the best at it now, but as I continue
                to grow, I can't wait to see where this profession takes me. As
                they say back home, I'm stoked to learn more!
            </p>
            <p>
                <a
                    href="/portfolio"
                    className="btn btn-primary"
                    variant="primary"
                >
                    Portfolio
                </a>
            </p>
        </Jumbotron>
    );
}

export default AboutJumbotron;

import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import snack from '../assets/images/snackbasket.png';
import pet from '../assets/images/petsite.png';
import meme from '../assets/images/memepark.png';
import card from '../assets/images/cardgame.png';
import figure from '../assets/images/figure.png';
import youtube from '../assets/images/mockup.png';
import me from '../assets/images/square.png';
import Scroll from '../components/Scroll';

import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <SimpleReactLightbox>
    <Layout>
      <SideBar sections={sections} />

      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h1 className="alt">Liz Watkins</h1>
              <h2 className="alt">// full stack developer</h2>
            </header>

            <footer>
              <Scroll type="id" element={'portfolio'}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="#contact"
                  className="button"
                >
                  Portfolio
                </a>
              </Scroll>
            </footer>
          </div>
        </section>

        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>Portfolio</h2>
            </header>

            <p>
              Like what you see? Check out my{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/e-a-w"
              >
                GitHub
              </a>{' '}
              for more of my work and to see what new projects are in progress!
            </p>

            <SRLWrapper>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <span className="image fit">
                      <img
                        src={snack}
                        data-attribute="SRL"
                        alt="Snack Basket"
                      />
                    </span>

                    <header>
                      <h3>Snack Basket</h3>
                      <p>
                        My team's entry for the Shellhacks 2020 hackathon! A
                        MERN stack app using the Spoonacular API where users can
                        search for and save their favorite recipes.
                      </p>
                      <p>
                        View the deployed site{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://snack-basket.herokuapp.com/"
                        >
                          here
                        </a>
                        !
                        <br />
                        Visit the{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/e-a-w/snack-basket"
                        >
                          GitHub repo
                        </a>
                        !
                      </p>
                    </header>
                  </article>
                  <article className="item">
                    <span className="image fit">
                      <img src={meme} data-attribute="SRL" alt="Meme Park" />
                    </span>

                    <header>
                      <h3>Meme Park</h3>
                      <p>
                        Web app where users can search, view and share memes!
                      </p>
                      <p>
                        Consulted with a UX/UI partner on site design. Used
                        React and Bootstrap to create a front end based on that
                        design. Built a server with Node.js and Express in order
                        to retrieve meme data from the GIPHY API.
                      </p>
                      <p>
                        View the deployed site{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://petster-exotic.herokuapp.com/"
                        >
                          here
                        </a>
                        !
                        <br />
                        Visit the{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/wyncode/C38_snakes_on_a_repo"
                        >
                          GitHub repo
                        </a>
                        !
                      </p>
                    </header>
                  </article>
                </div>
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <span className="image fit">
                      <img
                        src={pet}
                        data-attribute="SRL"
                        alt="Petster Exotic"
                      />
                    </span>

                    <header>
                      <h3>Petster Exotic</h3>
                      <p>
                        Social networking web app for exotic pet owners and
                        sitters!
                      </p>
                      <p>
                        Users can register an account, create user and pet
                        profiles, save favorite profiles, search by location or
                        description, contact other users by email/video call and
                        edit a calendar.
                      </p>
                      <p>
                        Built with Material-UI, the MERN tech stack and the
                        following APIs: Sendgrid for email, Jitsi for video
                        call, Mapbox for geolocation, Cloudinary for images,
                        Fullcalendar.io for the calendar.
                      </p>
                      <p>Winner of Wyncode's Pitch Day Contest!</p>
                      <p>
                        View the deployed site{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://petster-exotic.herokuapp.com/"
                        >
                          here
                        </a>
                        !
                        <br />
                        Visit the{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/wyncode/C38_snakes_on_a_repo"
                        >
                          GitHub repo
                        </a>
                        !
                      </p>
                    </header>
                  </article>
                  <article className="item">
                    <span className="image fit">
                      <img
                        src={youtube}
                        data-attribute="SRL"
                        alt="YouTube Mockup"
                      />
                    </span>

                    <header>
                      <h3>Youtube Mockup</h3>
                      <p>
                        A static page which uses only HTML and CSS to recreate a
                        pixel-perfect YouTube White page.
                      </p>
                      <p>
                        View it live{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://repl.it/@ewatkins/youtube-mockup"
                        >
                          here
                        </a>
                        !
                        <br />
                        Visit the{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/e-a-w/youtubewhite-mockup"
                        >
                          GitHub repo
                        </a>
                        !
                      </p>
                    </header>
                  </article>
                </div>
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <span className="image fit">
                      <img
                        src={figure}
                        data-attribute="SRL"
                        alt="Figure Finder"
                      />
                    </span>

                    <header>
                      <h3>Figure Finder</h3>
                      <p>
                        An app for artistic swimming coaches, judges and
                        athletes to be able to quickly look up the details of
                        any position or figure they need to reference.
                      </p>
                      <p>
                        App built with Material UI, the MERN tech stack, and
                        incorporates GraphQL and Apollo Client to handle data.
                      </p>
                      <p>
                        View the deployed site{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://figure-finder.herokuapp.com/"
                        >
                          here
                        </a>
                        !
                        <br />
                        Visit the{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/e-a-w/figure-finder"
                        >
                          GitHub repo
                        </a>
                        !
                      </p>
                    </header>
                  </article>
                  <article className="item">
                    <span className="image fit">
                      <img
                        src={card}
                        data-attribute="SRL"
                        alt="REPL Card Game"
                      />
                    </span>

                    <header>
                      <h3>REPL Card Game</h3>
                      <p>
                        A Javascript text-based card game built in Node.js to
                        play on the REPL site. Created with the npm packages
                        chalk, readline-sync and node-cards.
                      </p>
                      <p>
                        View it live{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://repl.it/@ewatkins/cardgame#index.js"
                        >
                          here
                        </a>
                        !
                        <br />
                        Visit the{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/e-a-w/repl-game"
                        >
                          GitHub repo
                        </a>
                        !
                      </p>
                    </header>
                  </article>
                </div>
              </div>
            </SRLWrapper>
          </div>
        </section>

        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>

            <span className="image featured">
              <img src={me} alt="avatar" />
            </span>

            <p style={{ textAlign: 'justify' }}>
              Hi! I'm Liz - a full stack developer and current teaching
              assistant at Wyncode.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Before making a change into the tech industry, I was working in
              retail as a department manager and in human resources. I've always
              loved programming and had taught myself how to build small
              websites with HTML/CSS/Javascript, but I really wanted to take
              that to the next level and start a full-fledged career in
              development. Now, after graduating Wyncode, I'm building MERN
              stack web applications and am 100% ready to kickstart that career!
            </p>
            <p style={{ textAlign: 'justify' }}>
              You can find me at:{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/e-a-w"
              >
                GitHub
              </a>{' '}
              ||{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/eawatkins/"
              >
                LinkedIn
              </a>{' '}
              ||{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://repl.it/@ewatkins"
              >
                Repl.it
              </a>{' '}
              ||{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://codepen.io/eaw/"
              >
                Codepen
              </a>
            </p>
          </div>
        </section>

        <section id="contact" className="four">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>

            <p>You can reach out to me with the form below!</p>

            <form action="https://formspree.io/mqkgzelb" method="POST">
              <div className="row">
                <div className="col-6 col-12-mobile">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message" />
                </div>
                <div className="col-12">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <PageFooter />
    </Layout>
  </SimpleReactLightbox>
);

export default IndexPage;

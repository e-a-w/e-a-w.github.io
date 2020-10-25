import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import snack from '../assets/images/snackbasket.png';
import pet from '../assets/images/petsite.png';
import meme from '../assets/images/memepark.png';
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
                        src="https://res.cloudinary.com/ozlizard/image/upload/v1603604017/heart2heart%20screenshots/Screen_Shot_2020-10-25_at_1.20.31_AM.png"
                        data-attribute="SRL"
                        alt="Heart 2 Heart"
                      />
                    </span>

                    <header>
                      <h3>Heart 2 Heart</h3>
                      <p>
                        My team's entry for the Palm Beach Tech 2020 Hackathon
                        and Gift of Life! Heart 2 Heart is a platform for bone
                        marrow donors and recipients of donations to connect and
                        share their stories, with the goal of encouraging more
                        donors to follow through with the full donation process.
                      </p>
                      <p>
                        View the deployed site{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://heart-to-heart.herokuapp.com/login"
                        >
                          here
                        </a>
                        !
                        <br />
                        Visit the{' '}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/Cal9233/heart2heart"
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
                        Guests can view and search for profiles by keyword,
                        while registered users can create user and pet profiles,
                        save favorite profiles, search by geolocation, contact
                        other users by email/video call and edit a calendar.
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
              assistant at Wyncode, where I recently completed their full stack
              web development program. Prior to Wyncode, I worked in retail as a
              department manager and in human resources, but I've always loved
              coding and had taught myself to build websites with
              HTML/CSS/Javascript before deciding to turn that passion into a
              career.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Recent projects have involved me participating in the Shellahacks
              and Palm Beach Tech Hackathons, as well as working on several
              personal projects to sharpen my skillset. I'm happiest when I'm
              tackling a challenge, and enjoy solving fun problems and learning
              new skills!
            </p>
            <p style={{ textAlign: 'right' }}>
              I'd love to connect about job opportunities in web or software
              development!
            </p>{' '}
            <p style={{ textAlign: 'right' }}>
              {' '}
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

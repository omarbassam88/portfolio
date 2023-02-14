import Container from "@mui/material/Container";
import Image from "next/image";
import { FadeInContainer } from "../../components";
import Styles from "./Styles";

const About = () => {
    return (
        <Styles id="about" className="about">
            <Container maxWidth="lg">
                <div className="content">
                    <header>
                        <FadeInContainer lazyLoad>
                            <h2>About</h2>
                        </FadeInContainer>
                    </header>
                    <div className="about__body">
                        <FadeInContainer lazyLoad>
                            <div className="about__image">
                                <Image
                                    src="/assets/images/ob-logo.png"
                                    alt="Omar Basssam"
                                    width={212}
                                    height={212}
                                />
                                <div className="about__image__mask" />
                            </div>
                        </FadeInContainer>
                        <div className="about__text">
                            <FadeInContainer lazyLoad>
                                <p>
                                    A Software Developer with 4 years of work experience.
                                    Highly skilled in Vue.js, Node.js, Python, HTML/CSS, JavaScript/TypeScript and Linux.
                                    Passionate about building tools and enthusiastic about sharing knowledge and learning new technologies.
                                    I also have experience in Data Analysis and Visualization using Python.
                                </p>
                            </FadeInContainer>
                            <FadeInContainer lazyLoad>
                                <p>Here are some of the technologies that I like working with</p>
                            </FadeInContainer>
                            <FadeInContainer lazyLoad>
                                <ul className="about__skills">
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>Vue.js</li>
                                    <li>React.js</li>
                                    <li>Python</li>
                                    <li>Svelte</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Clojure(Script)</li>
                                </ul>
                            </FadeInContainer>
                        </div>
                    </div>
                </div>
            </Container>
        </Styles>
    );
};

export default About;

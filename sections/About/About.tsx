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
                                    A Software Developer with 3 years of work experience.
                                    Highly skilled in Vue JS, Node.js, Python, HTML, JavaScript, Quasar Framework, and Linux.
                                    Passionate about building tools and enthusiastic about sharing knowledge and learning new technologies.
                                </p>
                            </FadeInContainer>
                            <FadeInContainer lazyLoad>
                                <p>Here are some of the technologies that I like working with</p>
                            </FadeInContainer>
                            <FadeInContainer lazyLoad>
                                <ul className="about__skills">
                                    <li>JavaScript (ES6+)</li>
                                    <li>TypeScript</li>
                                    <li>React.js</li>
                                    <li>React Native</li>
                                    <li>Next.js</li>
                                    <li>Node.js</li>
                                    <li>Styled Components</li>
                                    <li>SASS</li>
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

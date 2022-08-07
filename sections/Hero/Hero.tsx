import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { Button, FadeInContainer } from "../../components";
import Styles from "./Styles";

const Hero = () => {
    const [scrollIconIsVisible, setScrollIconIsVisible] = useState(true);

    const detectScrollDirection = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            setScrollIconIsVisible(false);
        } else {
            setScrollIconIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", detectScrollDirection, false);

        return () => {
            window.removeEventListener("scroll", detectScrollDirection, false);
        };
    }, []);

    return (
        <Styles>
            <Container maxWidth="lg">
                <div className="content">
                    <FadeInContainer delay={1300}>
                        <h3>Hi, my name is</h3>
                    </FadeInContainer>
                    <FadeInContainer delay={1450}>
                        <h1>Omar Bassam</h1>
                    </FadeInContainer>
                    <FadeInContainer delay={1600}>
                        <h3>Sofware Developer</h3>
                    </FadeInContainer>
                    <FadeInContainer delay={1750}>
                        <h4>
                            I am a Full-stack Web Developer who is passionate about
                            learning and working with new technologies.
                        </h4>
                    </FadeInContainer>
                    <div className="buttons">
                        <FadeInContainer delay={1900}>
                            <Button
                                size="medium"
                                href="https://github.com/omarbassam88"
                                target="_blank"
                            >
                                Follow me on Github
                            </Button>
                        </FadeInContainer>
                        <FadeInContainer delay={1900}>
                            <Button
                                size="medium"
                                href="https://omarbassam88.github.io/resume/"
                                target="_blank"
                            >
                                Check my Resume
                            </Button>
                        </FadeInContainer>
                    </div>                </div>
            </Container>
            <FadeInContainer delay={2450}>
                <motion.a
                    href="#about"
                    className="scroll-to-icon"
                    animate={{
                        opacity: scrollIconIsVisible ? 1 : 0,
                        transform: `scale(${scrollIconIsVisible ? 1 : 0})`,
                    }}
                    transition={{ duration: 0.25 }}
                    initial={false}
                />
            </FadeInContainer>
        </Styles>
    );
};

export default Hero;

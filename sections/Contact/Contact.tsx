/* eslint-disable react/no-unescaped-entities */
import Container from "@mui/material/Container";
import { Button, FadeInContainer } from "../../components";
import Styles from "./Styles";

const Contact = () => {
    return (
        <Styles id="contact">
            <Container maxWidth="lg">
                <div className="content">
                    <header className="align-center">
                        <FadeInContainer lazyLoad offset={-50}>
                            <h2>Get in Touch</h2>
                        </FadeInContainer>
                    </header>
                    <FadeInContainer lazyLoad offset={-50}>
                        <p>
                            Feel free to contact me. I'm open for Freelance and Remote Work.
                        </p>
                    </FadeInContainer>
                    <FadeInContainer lazyLoad offset={-50}>
                        <Button href="mailto:omar.bassam88@gmail.com">Contact Me</Button>
                    </FadeInContainer>
                </div>
            </Container>
        </Styles>
    );
};

export default Contact;

import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from '@mui/icons-material/Twitter';
import { FadeInContainer } from "..";
import Styles from "./Styles";

const Social = () => {
    return (
        <Styles className="social">
            <div className="content">
                <div className="left">
                    {/* Git Hub */}
                    <FadeInContainer delay={1900}>
                        <IconButton
                            component="a"
                            href="https://github.com/omarbassam88/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </FadeInContainer>
                    {/* Twitter */}
                    <FadeInContainer delay={1900}>
                        <IconButton
                            component="a"
                            href="https://twitter.com/omar_bassam88"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon />
                        </IconButton>
                    </FadeInContainer>
                </div>
                <div className="right">
                    <FadeInContainer delay={1900}>
                        <div className="email">
                            <a
                                href="mailto:omar.bassam88@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="underline-hover"
                            >
                                omar.bassam88@gmail.com
                            </a>
                        </div>
                    </FadeInContainer>
                </div>
            </div>
        </Styles>
    );
};

export default Social;

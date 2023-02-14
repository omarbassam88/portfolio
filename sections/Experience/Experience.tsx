import List from "@mui/material/List";
import Container from "@mui/material/Container";

import { FadeInContainer, ExperienceListItem } from "../../components";
import Styles from "./Styles";

const Experience = () => {
    const projects = [
        {
            name: "Research Connect",
            image: "/assets/images/rescon-logo.svg",
            link: "https://www.researchconnect.app/",
            description: "a cross-platform PWA Funded by AGYA (Arab and German Youth Association) that aims at connecting researchers in the middle east with other researchers for collaboration as well as finding service/product suppliers relative to their needs.",
            work: "Implemented features such as user authentication, profile creation for both the researchers and the suppliers, paper page creation for researchers, product page creation for suppliers and a messaging system was then added for users to be able to message each other.",
            stack: "Vue | Quasar | Express.js | Firebase"

        },
        {
            name: "QPB CLI Tool",
            image: "/assets/images/qpb.png",
            link: "https://github.com/omarbassam88/qpb",
            description: "an open source CLI application that allows to quickly build web projects using the many ready-to-go templates with the most popular frameworks whether for a front-end, back-end or a Node.js CLI application without having to write all the boilerplate, ready to start developing with basic CSS setup included.",
            work: "Developed in JavaScript using Node.js, the  kolorist library for terminal colors, prompts for interactive user input and minimist for parsing input arguments. Planning to include frameworks in the front end such as React, Vue, Svelte(kit), Next JS, Nuxt JS, and Quasar.And for the back- end, a basic Express template app and Nest app will be available. ",
            stack: "Node.js"
        },
        {
            name: "Curly Headz",
            image: "/assets/images/curlyheadz.png",
            link: "https://curlyheadz.com/",
            description: "a media production company specializing in Motion Graphics and Interactive experiences.",
            work: "Developed the website, first using WordPress deployed on c-panel on shared hosting. Converted the website to a simpler version using only HTML, and CSS using Bootstrap, and JavaScript.",
            stack: "HTML | CSS | JavaScript"

        },
        /* {
*     name: "Inanovations",
*     image: "/assets/images/rokkos.png",
*     link: "",
*     description: "",
*     work: ""
* }
 */
    ];
    return (
        <Styles id="experience" className="experience">
            <Container maxWidth="lg">
                <div className="content">
                    <header>
                        <FadeInContainer lazyLoad>
                            <h2>Experience</h2>
                        </FadeInContainer>
                    </header>
                    <List>
                        {projects.map(project =>
                            <FadeInContainer lazyLoad>
                                <ExperienceListItem
                                    name={project.name}
                                    image={project.image}
                                    href={project.link}
                                    description={project.description}
                                    work={project.work}
                                    stack={project.stack}
                                    width={110}
                                    height={59}
                                />
                            </FadeInContainer>
                        )}

                    </List>
                </div>
            </Container>
        </Styles>
    );
};

export default Experience;

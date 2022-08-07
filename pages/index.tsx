import axios from "axios";
import type { NextPage } from "next";
import { About, Contact, Experience, Hero, Projects } from "../sections";

interface HomeProps {
    repositories?: Repository[];
}

const Home: NextPage<HomeProps> = (props) => {
    const { repositories } = props;

    return (
        <div className="home">
            <Hero />
            <About />
            <Experience />
            {repositories?.length && <Projects repositories={repositories} />}
            <Contact />
        </div>
    );
};

export async function getServerSideProps() {
    try {
        const response = await axios.get(
            "https://api.github.com/users/omarbassam88/repos"
        );

        const data = response.data;


        const favoriteRepositories = [
            "qpb",
            "tf-vue",
            "we-rate-dogs",
            "craigslist_scrapper",
            "StoreLocator",
            "pisa-data-viz",
            "tmdb-movies",
            "us-bikeshare",
            "portfolio",
            "connect-four"
        ];

        const filteredRepositories = data.filter(({ name }: Repository) =>
            favoriteRepositories?.includes(name)
        );
        return {
            props: { repositories: filteredRepositories },
        };
    } catch (error) {
        console.log(error)
        return {
            props: { repositories: [] },
        };
    }
}

export default Home;

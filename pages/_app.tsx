import { useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { motion } from "framer-motion";
import { Layout, ThemeProvider } from "../components";
import createEmotionCache from "../createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const [appIsVisible, setAppIsVisible] = useState(false);

    useEffect(() => {
        setAppIsVisible(true);
    }, []);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Omar Bassam</title>
                <meta
                    name="description"
                    content="I’m a Front-end engineer with 4 years of experience specializing in building high-quality digital products."
                />
                <meta
                    name="author"
                    content="Omar Bassam <omar.bassam88@gmail.com>"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.div
                animate={{
                    opacity: appIsVisible ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: 1 }}
                initial={false}
            >
                <ThemeProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </motion.div>
        </CacheProvider>
    );
};
export default MyApp;

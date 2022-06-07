import '../styles/global.css'
import "../styles/styles.scss"
import Head from 'next/head';
import NavigationBar from "../components/common/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import Context from "../context/context";


export default function App({ Component, pageProps }) {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            {/*<RouterContext>*/}
            {/*<AlertProvider>*/}
                <Context>
                    <NavigationBar/>
                    <Component {...pageProps} />
                </Context>
            {/*</AlertProvider>*/}
            {/* <Footer/>*/}
        </>
    )
}
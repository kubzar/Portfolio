import Head from "next/head";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const MainLayout = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>JZ. - Jakub Zarębski</title>
            </Head>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout;

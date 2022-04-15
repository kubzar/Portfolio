import Footer from "../../components/Footer";
import Head from "next/head";
import Navigation from "../../components/Navigation";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
`;

const MainLayout = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>JZ. - Jakub Zarębski</title>
            </Head>
            <FlexContainer>
                <Navigation />
                <MainStyled>{children}</MainStyled>
                <Footer />
            </FlexContainer>
        </>
    )
}

export default MainLayout;

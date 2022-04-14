import styled from 'styled-components'
import Link from 'next/link'

const SocialPagesStyled = styled.div`
    display: flex;
    flex-basis: calc(100% / 3);
    margin-left: 100px;
`
const SocialLinksStyled = styled.div`
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    font-weight: 800;
    &:not(:last-child) {
        margin-right: 10px
    }
    &:hover {
        color:OliveDrab;
        cursor:pointer
    }
    transition: 0.1s ease-in-out;
    transition-delay: 0.05s;
`
const CreditsStyled = styled.div`
    display: flex;
    flex-basis: calc(100% / 3);    
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
`

const yearNow = new Date().getFullYear(); //A function defining the current year

const ThemeSwitcherStyled = styled.div`
    display: flex;
    flex-basis: calc(100% / 3);
    justify-content: end;
    margin-right: 100px;
`

const ThemeButtonStyled = styled.div`
    font-size: 15px;
    font-weight: 800;
    &:not(:last-child) {
        margin-right:  10px;
    }
    &:hover {
        color:OliveDrab;
        cursor:pointer
    }
    transition: 0.1s ease-in-out;
    transition-delay: 0.05s;
    color: grey;
`

const Wrapper = styled.section`
    display:flex;
    justify-content: space between;
    padding: 20px;
`

const Footer = () => {
    return (
        <Wrapper style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <SocialPagesStyled>
                <Link href="https://www.instagram.com/kubzar" passHref>
                    {/*I tried to figure out how to make external links open in a new tab 
                    by using the Link component, but none of the solutions that I'd found worked...
                    I'll stick to regular Link href for now. 
                    https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab */}
                    <SocialLinksStyled>
                        INSTAGRAM
                    </SocialLinksStyled>
                </Link>
                <Link href="https://www.linkedin.com/in/jakub-zarębski-497636143" passHref>
                    <SocialLinksStyled >
                        LINKEDIN
                    </SocialLinksStyled>
                </Link>
            </SocialPagesStyled>
            <CreditsStyled>
                &copy;{yearNow} Jakub Zarębski
            </CreditsStyled>
            <ThemeSwitcherStyled>
                <ThemeButtonStyled>
                    LIGHT
                </ThemeButtonStyled>
                <ThemeButtonStyled>
                    DARK
                </ThemeButtonStyled>
            </ThemeSwitcherStyled>
        </Wrapper>
    )
}

export default Footer
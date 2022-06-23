import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router';

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
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 1px;
    padding-bottom: 1px;
    &:not(:last-child) {
        margin-right: 2px
    }
    &:hover {
        background-color: WhiteSmoke;
        border-radius: 5px;
        cursor: pointer;
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
    padding-top: 1px;
    padding-bottom: 1px;
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
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 1px;
    padding-bottom: 1px;
    &:not(:last-child) {
        margin-right:  5px;
    }
    &:hover {
        background-color: WhiteSmoke;
        border-radius: 5px;
        cursor: pointer;
    }
    &:active {
        color: Black;
        background-color: #7DC387;
        border-radius: 5px;
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
    const router = useRouter();
    const { pathname, locale } = router;
    return (
        <Wrapper style={{ width: "100%" }}>
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
                    {locale == "pl" ? "JASNY" : locale == "en" ? "LIGHT" : ""}
                </ThemeButtonStyled>
                <ThemeButtonStyled>
                    {locale == "pl" ? "CIEMNY" : locale == "en" ? "DARK" : ""}
                </ThemeButtonStyled>
            </ThemeSwitcherStyled>
        </Wrapper>
    )
}

export default Footer
import styled from 'styled-components'

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

const yearNow = new Date().getFullYear(); //A function defining the current year (found on the internet). Can you explain?

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
                <SocialLinksStyled>
                    INSTAGRAM
                </SocialLinksStyled>
                <SocialLinksStyled>
                    LINKEDIN
                </SocialLinksStyled>
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
        </Wrapper> //do wytłumaczenia Wrapper style {{ }}
    )
}

export default Footer
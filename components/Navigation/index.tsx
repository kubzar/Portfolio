import styled from 'styled-components'

const LogoStyled = styled.nav`
    display: flex;
    flex-basis: calc(100% / 3);
    align-items: center;
    font-size: 35px;
    font-weight: 900;
    margin-left: 100px;
`
const LinkSwitcherStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: calc(100% / 3);
`
const LinkStyled = styled.nav`
    font-size: 18px;
    font-weight: 600;
    &:not(:last-child) {
        margin-right:  50px;
    }
    &:hover {
        color: OliveDrab;
        cursor: pointer;
    }
    transition: 0.1s ease-in-out;
    transition-delay: 0.05s;
`
const LanguageSwitcherStyled = styled.nav`
    display: flex;
    flex-basis: calc(100% / 3);
    justify-content: end;
    align-items: center;
    margin-right: 100px;
`

const LanguageButtonStyled = styled.div`
    font-size: 15px;
    font-weight: 800;
    color: grey;
    &:not(:last-child) {
        margin-right:  10px;
    }
    &:hover {
        color:OliveDrab;
        cursor:pointer
    }
    transition: 0.1s ease-in-out;
    transition-delay: 0.05s;
    
`

const Wrapper = styled.section`
    display:flex;
    justify-content: space between;
    border-bottom: 1px solid #eaeaea;
    padding: 20px;
`

const Navigation = () => {
    return (
        <Wrapper>
            <LogoStyled>
                JZ.
            </LogoStyled>
            <LinkSwitcherStyled>
                <LinkStyled>
                    Home
                </LinkStyled>
                <LinkStyled>
                    Portfolio
                </LinkStyled>
                <LinkStyled>
                    About
                </LinkStyled>
                <LinkStyled>
                    Contact
                </LinkStyled>
            </LinkSwitcherStyled>
            <LanguageSwitcherStyled>
                <LanguageButtonStyled>
                    POL
                </LanguageButtonStyled>
                <LanguageButtonStyled>
                    ENG
                </LanguageButtonStyled>
            </LanguageSwitcherStyled>
        </Wrapper>
    )
}

export default Navigation
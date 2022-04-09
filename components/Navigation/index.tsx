import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router';

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
const LinkStyled = styled.a`
    font-size: 18px;
    color: #bcbcbc;
    &:not(:last-child) {
        margin-right:  50px;
    }
    &:hover {
        color: OliveDrab;
        cursor: pointer;
    }
    transition: 0.1s ease-in-out;
    transition-delay: 0.05s;
    &.active {
        color: OliveDrab;
    }
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

/* 
    Masonry Gallery:
        https://reactjsexample.com/tag/masonry/
        https://freefrontend.com/css-masonry-layout-examples/
    NextJs Links:
        https://nextjs.org/docs/api-reference/next/link
    NextJs Images:
        https://nextjs.org/docs/api-reference/next/image
    Conditional Link active class:
        https://dev.to/yuridevat/how-to-add-styling-to-an-active-link-in-nextjs-593e
*/

const Navigation = () => {
    const router = useRouter();
    return (
        <Wrapper>
            <LogoStyled>
                JZ.
            </LogoStyled>
            <LinkSwitcherStyled>
                {/* Check the Next.js documentation for the "Link" component to understand the passHref property */}
                <Link href="/" passHref>
                    <LinkStyled className={router.pathname == "/" ? "active" : ""}>
                        Home
                    </LinkStyled>
                </Link>
                <Link href="/portfolio" passHref>
                    <LinkStyled className={router.pathname == "/portfolio" ? "active" : ""}>
                        Portfolio
                    </LinkStyled>
                </Link>
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
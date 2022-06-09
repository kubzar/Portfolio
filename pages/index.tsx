import Footer from '../components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import type { NextPage } from 'next'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const FilterBarStyled = styled.div`
  display: flex;
  flex-basis: calc(100% / 8);
  margin-left: 100px;
`
const MainContainerStyled = styled.div`
  display: flex;
`

const GreetingTextStyled = styled.div`
  text-align: right;
  margin-top: 80px;
  color: black;
  font-size: 80px;
  font-weight: 700;
  font: Poppins;
  text-align: left;
`
const Wrapper = styled.section`
    display:flex;
    justify-content: space between;
    padding: 20px;
`

/**
 * Scroll spy:
 * https://github.com/pettiboy/react-ui-scrollspy/
 * 
 * i18n:
 * https://nextjs.org/docs/advanced-features/i18n-routing
 * https://github.com/vercel/next.js/tree/canary/examples/i18n-routing
 * https://dev.to/codegino/your-guide-to-nextjs-internationalization-4aa4#content-translation
 * 
 * display: grid;
 * https://grid.layoutit.com/
 */

const Home: NextPage = () => {
  const router = useRouter();
  const { pathname, locale } = router;
  return (
    <Wrapper>
      <FilterBarStyled>

      </FilterBarStyled>
      <MainContainerStyled>
        <GreetingTextStyled>
          {locale == "pl" ? "Cześć!" : locale == "en" ? "Hello!" : ""} <br />
          {locale == "pl" ? "Jestem Jakub." : locale == "en" ? "It's Jakub." : ""}
        </GreetingTextStyled>
      </MainContainerStyled>
    </Wrapper>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
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

const AboutTextStyled = styled.div`
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


const About: NextPage = () => {
    const router = useRouter();
    const { pathname, locale } = router;
    return (
        <Wrapper>
            <FilterBarStyled>

            </FilterBarStyled>
            <MainContainerStyled>
                <AboutTextStyled>
                    {locale == "pl" ? "O mnie" : locale == "en" ? "About me" : ""} <br />
                </AboutTextStyled>
            </MainContainerStyled>
        </Wrapper>
    )
}

export default About

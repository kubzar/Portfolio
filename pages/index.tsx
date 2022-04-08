import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const FilterBarStyled = styled.a`
  display: flex;
  flex-basis: calc(100% / 8);
  margin-left: 100px;
`
const MainContainerStyled = styled.a`
  display: flex;
`

const GreetingTextStyled = styled.a`
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

const Home: NextPage = () => {
  return (
    <Wrapper>
      <FilterBarStyled>

      </FilterBarStyled>
      <MainContainerStyled>
        <GreetingTextStyled>
          Hello! <br /> It&#39;s Jakub.
        </GreetingTextStyled>
      </MainContainerStyled>
    </Wrapper>
  )
}

export default Home

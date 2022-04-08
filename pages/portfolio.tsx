import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'


const FilterBarStyled = styled.div`
  display: flex;
  flex-basis: calc(100% / 8);
  flex-direction: column;
  margin-left: 100px;
`

const FilterLinkStyled = styled.div`
    display: flex;    
    text-align: right;
    margin-top: 30px;
    font-size: 15px;
    font-weight: 700;
    &:hover {
        color: OliveDrab;
        cursor: pointer;
    }
    transition: 0.1s ease-in-out;
    transition-delay: 0.05s;
`

const MainContainerStyled = styled.div`
  display: flex;
  margin-top: 30px;
`

const LinkStyled = styled.div`
  text-align: right;
  color: black;
`

const Wrapper = styled.section`
    display:flex;
    justify-content: space between;
    padding: 20px;
`

const About: NextPage = () => {
    return (
        <div>
            <Wrapper>
                <FilterBarStyled>
                    <FilterLinkStyled>
                        Portrait
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        Event
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        Travel
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        Lifestyle
                    </FilterLinkStyled>
                </FilterBarStyled>
                <MainContainerStyled>
                    <LinkStyled>
                        This is the Portfolio page.
                    </LinkStyled>
                </MainContainerStyled>
            </Wrapper>
        </div>
    )
}

export default About
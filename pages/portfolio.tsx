import Footer from '../components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import ImageCard from '../components/ImageCard'
import Navigation from '../components/Navigation'
import type { NextPage } from 'next'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const FilterBarStyled = styled.div`
  display: flex;
  flex-basis: calc(100% / 7);
  flex-direction: column;
`

const FilterLinkStyled = styled.div`
    display: flex;    
    text-align: right;
    margin-top: 30px;
    font-size: 15px;
    font-weight: 800;
    color: grey;
    &:hover {
        color: OliveDrab;
        cursor: pointer;
    }
    transition: 0.1s ease-in-out;
    transition-delay: 0.05s;
`

const MainContainerStyled = styled.div`
  display: flex;
  flex-basis: calc(100% * 6 / 7);
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
    align-items: center;
`

const ImageCategoryStyled = styled.div`
display: flex;
min-width: 100%;
flex-direction: column;
`

const FilterTitleStyled = styled.div`
  display:flex;  
  color: black;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  justify-conent: center;
  line-height: 1.25;
`

const ImageContainerStyled = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-grow: 1;
`

const ImageColumnStyled = styled.div`
display: flex;
flex-basis: calc(100% / 4);
flex-direction: column;
&:not(:last-child) {
    margin-right: 15px;
}
`

const ImageComponentStyled = styled.div`
border-radius: 15px;
margin-bottom: 15px;
position: relative;
display: flex
`

const Wrapper = styled.section`
    display:flex;
    justify-content: space between;
    padding: 20px;
    margin-left: 100px;
    margin-right: 100px;
`

/**
 * line-height: number;
 * for controlling font spacing,
 */

const About: NextPage = () => {
    const router = useRouter()
    const { locale, locales } = router

    return (
        <div>
            <Wrapper>
                <FilterBarStyled>
                    <FilterLinkStyled>
                        PORTRAIT
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        EVENT
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        TRAVEL
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        LIFESTYLE
                    </FilterLinkStyled>
                </FilterBarStyled>
                <MainContainerStyled>
                    <ImageCategoryStyled>
                        <FilterTitleStyled>
                            Portrait ({locale})
                        </FilterTitleStyled>
                        <ImageContainerStyled>
                            <ImageColumnStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/" alt="" /></ImageComponentStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>

                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>

                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>

                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>
                                <ImageComponentStyled><ImageCard image="https://source.unsplash.com/random/900×700/" alt="" /></ImageComponentStyled>

                            </ImageColumnStyled>
                        </ImageContainerStyled>
                    </ImageCategoryStyled>
                    <FilterTitleStyled>
                        <div>Event</div>
                    </FilterTitleStyled>
                    <div><ImageCard image="https://source.unsplash.com/random/900×760/" alt="" /></div>
                    <div><ImageCard image="https://source.unsplash.com/random/900×760/" alt="" /></div>
                    <div><ImageCard image="https://source.unsplash.com/random/900×760/" alt="" /></div>

                    <FilterTitleStyled>
                        Travel
                        <ImageCard image="https://source.unsplash.com/random/900×600/" alt="" />
                    </FilterTitleStyled>
                    <FilterTitleStyled>
                        Lifestyle
                    </FilterTitleStyled>
                </MainContainerStyled>
            </Wrapper>
        </div>

    )
}

export default About
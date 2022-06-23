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
  margin-right: 50px;
`
const FIlterBarTitleStyled = styled.div`
  display:flex;  
  justify-content: left;
  color: black;
  font-size: 15px;
  font-weight: 700;
  margin-top: 30px;
  
`

const FilterLinkStyled = styled.div`
    display: flex;    
    text-align: left;
    margin-top: 30px;
    font-size: 15px;
    font-weight: 800;
    color: grey;
    &:hover {
        color: #7DC387;
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
`

const ImageCategoryStyled = styled.div`
display: flex;
min-width: 100%;
flex-direction: column;
`

const FilterTitleStyled = styled.div`
  display:flex;  
  justify-content: left;
  color: black;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.25;
`

const ImageContainerStyled = styled.div`
    display: flex;
    margin-bottom: 20px;
    min-height: 100%;
    justify-content: flex-start;
`

const ImageColumnStyled = styled.div`
display: flex;
flex-basis: calc(100% / 4);
width: 300px;
flex-direction: column;
&:not(:last-child) {
    margin-right: 15px;
}
`

const ImageComponentHorizontalStyled = styled.div`
margin-bottom: 15px;
border-radius: 10px;
overflow: hidden;
max-width: 300px;
height: 200px;
position: relative;
`

const ImageComponentVerticalStyled = styled.div`
margin-bottom: 15px;
border-radius: 10px;
overflow: hidden;
max-width: 300px;
height: 450px;
position: relative;
`

const Wrapper = styled.section`
    display:flex;
    padding: 20px;
    margin-left: 100px;
    margin-right: 100px;
`

/**
 * line-height: number;
 * for controlling font spacing,
 */

const Portfolio: NextPage = () => {
    const router = useRouter()
    const { locale, locales } = router

    return (
        <div>
            <Wrapper>
                <FilterBarStyled>
                    <FIlterBarTitleStyled>
                        {locale == "pl" ? "Fotografia " : locale == "en" ? "Photography" : ""}
                    </FIlterBarTitleStyled>
                    <FilterLinkStyled>
                        {locale == "pl" ? "PORTRETY " : locale == "en" ? "PORTRAITS" : ""}
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        {locale == "pl" ? "REPORTAŻ OKOLICZNOŚCIOWY" : locale == "en" ? "EVENTS" : ""}
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        {locale == "pl" ? "KRAJOBRAZY" : locale == "en" ? "LANDSCAPES" : ""}
                    </FilterLinkStyled>
                    <FilterLinkStyled>
                        {locale == "pl" ? "KONCERTY" : locale == "en" ? "CONCERTS" : ""}
                    </FilterLinkStyled>

                </FilterBarStyled>
                <MainContainerStyled>
                    <ImageCategoryStyled>
                        <FilterTitleStyled>
                            {locale == "pl" ? "Portrety" : locale == "en" ? "Portraits" : ""}
                        </FilterTitleStyled>
                        <ImageContainerStyled>
                            <ImageColumnStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/300x450" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/500x750" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/1500x1000" alt="" /></ImageComponentHorizontalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/500x750" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/900x600" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/700x1050" alt="" /></ImageComponentVerticalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/900x600" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/600x900" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/600x400" alt="" /></ImageComponentHorizontalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/450x300" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/300x450" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                            </ImageColumnStyled>
                        </ImageContainerStyled>
                    </ImageCategoryStyled>

                    <ImageCategoryStyled>
                        <FilterTitleStyled>
                            {locale == "pl" ? "Reportaż okolicznościowy" : locale == "en" ? "Events" : ""}
                        </FilterTitleStyled>
                        <ImageContainerStyled>
                            <ImageColumnStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/300x450" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/1500x1000" alt="" /></ImageComponentHorizontalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/900x600" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/700x1050" alt="" /></ImageComponentVerticalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/900x600" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/600x900" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/600x400" alt="" /></ImageComponentHorizontalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/450x300" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/300x450" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                            </ImageColumnStyled>
                        </ImageContainerStyled>
                    </ImageCategoryStyled>

                    <ImageCategoryStyled>
                        <FilterTitleStyled>
                            {locale == "pl" ? "Krajobrazy" : locale == "en" ? "Landscapes" : ""}
                        </FilterTitleStyled>
                        <ImageContainerStyled>
                            <ImageColumnStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/300x450" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/1500x1000" alt="" /></ImageComponentHorizontalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/900x600" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/700x1050" alt="" /></ImageComponentVerticalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/900x600" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/600x900" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/600x400" alt="" /></ImageComponentHorizontalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/450x300" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/300x450" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                            </ImageColumnStyled>
                        </ImageContainerStyled>
                    </ImageCategoryStyled>

                    <ImageCategoryStyled>
                        <FilterTitleStyled>
                            {locale == "pl" ? "Koncerty" : locale == "en" ? "Concerts" : ""}
                        </FilterTitleStyled>
                        <ImageContainerStyled>
                            <ImageColumnStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/300x450" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/1500x1000" alt="" /></ImageComponentHorizontalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/900x600" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/700x1050" alt="" /></ImageComponentVerticalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/900x600" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/600x900" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/600x400" alt="" /></ImageComponentHorizontalStyled>
                            </ImageColumnStyled>
                            <ImageColumnStyled>
                                <ImageComponentHorizontalStyled><ImageCard image="https://source.unsplash.com/random/450x300" alt="" /></ImageComponentHorizontalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/300x450" alt="" /></ImageComponentVerticalStyled>
                                <ImageComponentVerticalStyled><ImageCard image="https://source.unsplash.com/random/500x750" alt="" /></ImageComponentVerticalStyled>
                            </ImageColumnStyled>
                        </ImageContainerStyled>
                    </ImageCategoryStyled>
                </MainContainerStyled>
            </Wrapper>
        </div>

    )
}

export default Portfolio
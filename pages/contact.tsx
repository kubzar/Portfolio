import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const LinkStyled = styled.a`
  text-align: right;
  color: black;
`

const Contact: NextPage = () => {
    return (
        <div>
            <LinkStyled>
                This is the contact page.
            </LinkStyled>
        </div>
    )
}

export default Contact
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"
import { media } from "utils/Media"

// import aboutImg from "images/banners/banner-about.jpg"
// import taorminaImg from "images/banners/taormina.jpg"
// import contactImg from "images/banners/contact-me.jpg"
// import privacyImg from "images/banners/privacy.jpg"
// import cookiesImg from "images/banners/cookies.jpg"
// import galleryImg from "images/banners/gallery.jpg"
// import realwedddingsImg from "images/banners/real-weddings.jpg"

// import rachelVito from "images/banners/rachel-and-vito.jpg"
// import samanthaOwain from "images/banners/samantha-and-owain.jpg"
// import karenBrian from "images/banners/karen-and-brian.jpg"
// import rachelBrendan from "images/banners/rachel-and-brendan.jpg"
// import rebeccaAlex from "images/banners/rebecca-and-alex.jpg"
// import lucyPaul from "images/banners/lucy-and-paul.jpg"
// import lauraDan from "images/banners/laura-and-dan.jpg"
// import katieNick from "images/banners/katie-and-nick.jpg"

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    padding-top: 56px;
    overflow: hidden;

    @media ${media.sm} {
        padding-top: 76px;
    }

    @media ${media.md} {
        padding-top: 88px;
    }
`


const InnerWrapper = styled.div`
    position: relative;
    min-height: 150px;

    @media ${media.md} {
        min-height: 300px;
    }

    ${props => props.tall && css`
        @media ${media.lg} {
            min-height: 500px;
        }
    `}

    ${props => props.taller && css`
        @media ${media.lg} {
            min-height: 600px;
        }
    `}

    ${props => props.taller3 && css`
        @media ${media.lg} {
            min-height: 630px;
        }
    `}

    /* background-size: cover;
    background-position: center center;
    background-image: url("${aboutImg}");

    ${props => props.page === "taormina" && css`
        background-image: url("${taorminaImg}");
    `}

    ${props => props.page === "contact" && css`
        background-image: url("${contactImg}");
    `}

    ${props => props.page === "privacy" && css`
        background-image: url("${privacyImg}");
    `}

    ${props => props.page === "cookies" && css`
        background-image: url("${cookiesImg}");
    `}

    ${props => props.page === "gallery" && css`
        background-image: url("${galleryImg}");
    `}

    ${props => props.page === "realweddings" && css`
        background-image: url("${realwedddingsImg}");
    `}

    ${props => props.page === "rachel-and-vito" && css`
        background-image: url("${rachelVito}");
    `}

    ${props => props.page === "samantha-and-owain" && css`
        background-image: url("${samanthaOwain}");
    `}

    ${props => props.page === "karen-and-brian" && css`
        background-image: url("${karenBrian}");
    `}

    ${props => props.page === "rachel-and-brendan" && css`
        background-image: url("${rachelBrendan}");
    `}

    ${props => props.page === "rebecca-and-alex" && css`
        background-image: url("${rebeccaAlex}");
    `}

    ${props => props.page === "lucy-and-paul" && css`
        background-image: url("${lucyPaul}");
    `}

    ${props => props.page === "laura-and-dan" && css`
        background-image: url("${lauraDan}");
    `}

    ${props => props.page === "katie-and-nick" && css`
        background-image: url("${katieNick}");
    `} */
`

const WrapperText = styled.div`
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    background: rgba(176,196,221,.5);
    padding: 1rem;

    .gatsby-image-sharp {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    h1 {
        color: #fff;
        text-align: center;
        text-shadow: 1px 1px #555;
        font-family: ${props => props.theme.font.family.ruthie};
        font-size: 50px;
        margin: 0;

        @media ${media.sm} {
            font-size: 55px;
        }

        @media ${media.lg} {
            font-size: 85px;
        }
    }
`

export const imageFragment = graphql`
    fragment imageFragment on File {
        childImageSharp {
            fluid(maxWidth: 1920, quality: 98) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`

const PageHeader = (props) => {
    return( 
        <Wrapper>
            <InnerWrapper tall={props.tall} taller={props.taller} taller3={props.taller3} page={props.page}>
                <Img fluid={props.bannerImage} alt="" />
                <WrapperText>
                    <h1>{props.title}</h1>
                </WrapperText>
            </InnerWrapper>
        </Wrapper>
    )
}

export default PageHeader

PageHeader.defaultProps = {
    tall: false
}
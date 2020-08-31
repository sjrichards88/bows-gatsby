import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"
import { media } from "utils/Media"

import aboutImg from "images/banners/banner-about.jpg"
import weddingsImg from "images/banners/real-weddings.jpg"
import taorminaImg from "images/banners/taormina.jpg"

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

    background-size: cover;
    background-position: center center;
    background-image: url("${aboutImg}");

    ${props => props.page === "weddings" && css`
        background-image: url("${weddingsImg}");
    `}

    ${props => props.page === "taormina" && css`
        background-image: url("${taorminaImg}");
    `}

`

const WrapperText = styled.div`
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    background: rgba(176,196,221,.5);
    padding: 1rem;

    h1 {
        color: #fff;
        text-align: center;
        text-shadow: 1px 1px #555;
        font-family: ${props => props.theme.font.family.ruthie};
        font-size: 55px;
        margin: 0;

        @media ${media.lg} {
            font-size: 85px;
        }
    }
`

export const imageFragment = graphql`
    fragment imageFragment on File {
        childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
        }
    }
`

const PageHeader = (props) => {
    return( 
        <Wrapper>
            <InnerWrapper tall={props.tall} page={props.page}>
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
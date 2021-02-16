import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"
import { media } from "utils/Media"

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

    .gatsby-image-wrapper {
        position: absolute !important;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
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
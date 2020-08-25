import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { media } from "utils/Media"

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    padding-top: 4rem;
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

        @media ${media.md} {
            font-size: 85px;
        }
    }
`

export const imageFragment = graphql`
    fragment imageFragment on File {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
        }
    }
`

const PageHeader = (props) => {
    const data = useStaticQuery(graphql`
        query {
            about: file(relativePath: { eq: "banners/banner-about.jpg" }) {
                ...imageFragment
            }
        }
    `)

    return(
        <Wrapper>
            <Img fluid={data[props.page].childImageSharp.fluid} alt="" />
            <WrapperText>
                <h1>{props.title}</h1>
            </WrapperText>
        </Wrapper>
    )
}

export default PageHeader
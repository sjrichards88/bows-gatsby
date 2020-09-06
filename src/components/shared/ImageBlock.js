import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { media } from "utils/Media"
import styled from "styled-components"

const ImageWrap = styled.div`
    transform: scale(1);
    display: block;
    padding: .5rem;
    box-shadow: 0 1px 3px 1px rgba(0,0,0,.15);
    text-align: center;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.font.family.cinzel};
    text-decoration: none;
    margin-bottom: 2rem;
    /* padding-bottom: 3rem; */

    p {
        padding: 2rem 0 1rem 0;
        
        @media ${media.lg} {
            padding: 3rem 0 1rem 0;
            font-size: ${props => props.theme.font.size.lg};
        }
    }

    .logo {
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        bottom: 3rem;
        padding: 17px;
        width: 60px;
        transition: .3s all ease-in-out;

        @media ${media.lg} {
            width: 70px;
            bottom: 4rem;
        }
    }

    .img-wrapper {
        overflow: hidden;

        .gatsby-image-wrapper {
            transform: scale(1);
            transition: .3s all ease-in-out;
        }
    }


    &:hover {
        z-index: 5;
        text-decoration: none;

        .gatsby-image-wrapper {
            transform: scale(1.05);
        }

        .logo {
            background-color: ${props => props.theme.colors.secondary};
        }
    }
`

const ImageBlock = (props) => {
    return(
        <ImageWrap  as={props.to ? Link : "div"}>
            <div className="img-wrapper">
                <Img fluid={props.data.img.childImageSharp.fluid} alt={props.data.alt} />
            </div>
            <img src={props.logo.childImageSharp.resize.src} alt="" className="logo" />
            <p>{props.data.title}</p>
        </ImageWrap>        
    )
}

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                allImageBlocksJson {
                    edges {
                        node {
                            id
                            link
                            alt
                            img {
                                childImageSharp {
                                    fluid(maxWidth: 576, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            title
                        }
                    }
                }
                logo: file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        resize(width: 70, cropFocus: CENTER, quality: 100)  {
                            src
                        }
                    }
                }
            }
        `}
        render={data => {
            const {id, ...newProps} = props
            return data.allImageBlocksJson.edges.map(({node}, i) => {
                if (id && id === node.id) {
                    return (
                        <ImageBlock logo={data.logo} data={node} {...newProps} />
                    )
                } else return ""
            })
        }}
    />
)
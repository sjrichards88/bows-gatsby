import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"
import { media } from "utils/Media"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import scrollToElement from "scroll-to-element"

const Wrapper = styled.div`
    /* max-height: 100vh; */
    width: 101%;
    /* overflow: hidden; */
    position: relative;
    margin-bottom: 1.5rem;

    .wrapper-end {
        position: absolute;
        bottom: 0;
    }
`

const SliderStyled = styled(Slider)`
    /* position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%); */

    .slick-list,
    .slick-track,
    .slick-slide {
        height: 100vh;
    }

    .gatsby-image-wrapper {
        /* max-height: 100vh; */
    }

    .slider-image-mobile {
        /* position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; */
    }

`

const WrapperText = styled.div`
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    background: rgba(176,196,221,.6);
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

const WrapperArrow = styled.button`
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    background-color: transparent;
    bottom: 20px;
    color: #fff;
    font-size: 1.5em;
    z-index: 12;
    padding: 6px;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    
    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -55%);
        animation: bounce 1600ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    
    &:hover {
        color: white;
        background-color: ${props => props.theme.colors.primary};
    }

    @keyframes bounce {
        50% {
            transform: translate(-50%, -40%);
        }
    }
`

class LandingSlider extends Component {
    
    scrollDown() {
        scrollToElement('.wrapper-end', {
            offset: 0,
            duration: 1000
        });
    }

    render() {
        const settings = {
            dots: false,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            fade: true,
            autoplay: 1,
            adaptiveHeight: false,
            lazyload: true,
            pauseOnHover: false,
            arrows: false
        }

        return(
            <Wrapper>
                <SliderStyled {...settings}>
                    {this.props.data.allLandingSliderJson.edges.map((image, i) => {
                        return(
                            <React.Fragment key={i}>
                                <Img fluid={image.node.img.childImageSharp.fluid} className="d-none d-md-block" />
                                <Img fluid={image.node.imgmob.childImageSharp.fluid} className="slider-image-mobile d-md-none" />
                            </React.Fragment>
                        )
                    })}
                </SliderStyled>
                <WrapperText>
                    <h1>Weddings in Taormina <br/>by Bouquets and Bows</h1>
                </WrapperText>
                <WrapperArrow onClick={this.scrollDown}>
                    <FontAwesomeIcon icon={faAngleDown} />
                    <span className="sr-only">Scroll down</span>
                </WrapperArrow>
                <div className="wrapper-end"></div>
            </Wrapper>
        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allLandingSliderJson {
                    edges {
                        node {
                            img {
                                childImageSharp {
                                    fluid(maxWidth: 1920, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            imgmob {
                                childImageSharp {
                                    fluid(maxWidth: 768, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <LandingSlider data={data} />
            ) 
        }}
    />
)

// imgMobile {
//     childImageSharp {
//         fluid(maxWidth: 768, quality: 100) {
//             ...GatsbyImageSharpFluid
//         }
//     }
// }
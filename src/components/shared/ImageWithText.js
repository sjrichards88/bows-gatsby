import React from "react"
import styled, { css } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import { media } from "utils/Media"
import ContainerMax from "components/shared/ContainerMax"

import fadedLogo from "images/logo-fade.png"

const StyledContainerMax = styled(ContainerMax)`
    min-height: 350px;
    padding-top: 2rem;
    padding-bottom: 2rem;
`

const ColStyled = styled(Col)`
    position: relative;
    overflow: hidden;
`

const ImgStyled = styled(Img)`
    @media ${media.lg} {
        position: absolute !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }
`

const ColTextStyled = styled(Col)`
    position: relative;
`

const TextWrapper = styled.div`
    padding: 2rem 1.5rem;
    color: white;
    position: relative;
    z-index: 1;
    font-size: ${props => props.theme.font.size.md};
    background-color: ${props => props.theme.colors.primary};

    ${props => props.secondary && css`
        background-color: ${props => props.theme.colors.secondary};
    `}

    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background-image: url("${fadedLogo}");
        background-size: cover;
        opacity: .2;
        z-index: 0;
    }
`

const ImageWithText = (props) => {
    return(
        <StyledContainerMax>
            <ContainerMax>
                <Row>
                    <ColStyled lg={{ size: 6, order: props.imageRight ? 2 : 1}} xl={8}>
                        <ImgStyled fluid={props.data.img.childImageSharp.fluid} alt={props.data.alt} />
                    </ColStyled>
                    <ColTextStyled lg={{ size: 6, order: props.imageRight ? 1 : 2}} xl={4} className="p-lg-0">
                        <TextWrapper dangerouslySetInnerHTML={{ __html: props.data.text }} secondary={props.secondary} />
                    </ColTextStyled>
                </Row>
            </ContainerMax>
        </StyledContainerMax>
    )
}

ImageWithText.defaultProps = {
    imageRight: false,
    secondary: false
}

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                allImageWithTextJson {
                    edges {
                        node {
                            id
                            alt
                            img {
                                childImageSharp {
                                    fluid(maxWidth: 1200, quality: 98) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                            text
                        }
                    }
                }
            }
        `}
        render={data => {
            return data.allImageWithTextJson.edges.map(({node}, i) => {
                if (props.id && props.id === node.id) {
                    return (
                        <ImageWithText data={node} {...props} key={i} />
                    )
                } else return ""
            })
        }}
    />
)
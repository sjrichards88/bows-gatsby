import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, Collapse, Row, Col } from "reactstrap"
import styled, { css } from "styled-components"
import Layout from "components/Layout/Layout"
import Gallery from "components/shared/Gallery"
import PageHeader from "components/shared/PageHeader"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const Button = styled.button`
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    padding: .5rem 1rem;
    border: 0;

    ${props => props.active && css`
        background-color: ${props => props.theme.colors.primary};
    `}
`

const GalleryPage = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const { 
        name,
        slug,
        bannerImage,
        introText,
        fullText,
        endText
    } = props.data.galleriesJson


    return(
        <Layout title={name}>
            <PageHeader 
                page={slug === "" ? "gallery" : slug} 
                title={name === "" ? "Gallery" :  name} 
                bannerImage={bannerImage.childImageSharp.fluid}
            />

            {introText && 
                <TextContainer>
                    <Text md dangerouslySetInnerHTML={{ __html: introText}} />
                </TextContainer>
            }

            {fullText && 
                <Collapse isOpen={isOpen}>
                    <Container>
                        <Row className="justify-content-center text-center pb-4 pb-md-4">
                            <Col lg={props.thin ? 8 : 10}>
                                <Text md dangerouslySetInnerHTML={{ __html: fullText}} />
                            </Col>
                        </Row>
                    </Container>
                </Collapse>
            }

            <Container>
                <Row className="justify-content-center text-center pb-4 pb-md-4">
                    {fullText && 
                        <Button onClick={toggle} active={isOpen}>
                            {isOpen ? "Read less" : "Read more"}
                        </Button>
                    }
                </Row>
            </Container>

            <Gallery slug={slug} />

            {endText && 
                <TextContainer>
                    <Text md dangerouslySetInnerHTML={{ __html: endText}} />
                </TextContainer>
            }
        </Layout>
    )
}


export const query = graphql`
    query($id: String!) {
        galleriesJson(id: { eq:$id }) {
            name
            slug
            bannerImage {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 85)  {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            introText
            fullText
            endText
        }
    }
`

export default GalleryPage
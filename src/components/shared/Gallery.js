import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import LazyLoad from "react-lazyload"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { Row, Col } from "reactstrap"
import ContainerMax from "components/shared/ContainerMax"

const Thumbnail = styled.a`
    margin: 0 .5rem 1rem;
    display: block;
    overflow: hidden;

    img {
        transition: all .4s ease;
        transform: scale(1);
        margin: 0 auto;
        display: block;
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`

const Gallery = (props) => {
    const images = props.images.map((image, i) => {
        return(
            <Col xs={6} sm={6} md={4} lg={3} key={i} className="px-0">
                <LazyLoad>
                    <Thumbnail href={image.img.large.resize.src} >
                        <img src={image.img.thumb.resize.src} alt={image.caption} />
                    </Thumbnail>
                </LazyLoad>
            </Col>
        )
    })

    const options = {
        buttons: {
            showDownloadButton: false
        }
    }

    return (
        <SimpleReactLightbox>
            <ContainerMax>
                <SRLWrapper options={options}>
                    <Row>
                        {images}
                    </Row>
                </SRLWrapper>
            </ContainerMax>
        </SimpleReactLightbox>
    )
}

export default (props) => {
    return(
        <StaticQuery
            query={graphql`
                query {
                    allGalleriesJson {
                        edges {
                            node {
                                slug
                                images {
                                    img {
                                        thumb: childImageSharp {
                                            resize(width: 415, cropFocus: CENTER, quality: 100)  {
                                                src
                                            }
                                        }
                                        large: childImageSharp {
                                            resize(width: 1500, cropFocus: CENTER, quality: 100)  {
                                                src
                                            }
                                        }
                                    }
                                    caption
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const gallery = data.allGalleriesJson.edges.filter(gallery => gallery.node.slug === props.slug)

                if (gallery) {
                    return(
                        <Gallery images={gallery[0].node.images} />
                    )
                } else return ""
            }}
        />
    )
}
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
    const images = props.images.nodes.map((image, i) => {
        return(
            <Col xs={6} sm={6} md={4} lg={3} key={i} className="px-0">
                <LazyLoad>
                    <Thumbnail href={image.img.large.resize.src} >
                        <img src={image.img.thumb.resize.src} alt=""/>
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
    console.log(props.name)
    return(
        <StaticQuery
            query={graphql`
                query {
                    featured: allGalleryJson {
                        nodes {
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
            `}
            render={data => (
                <Gallery images={props.name !== "" ? data[props.name] : data.featured} />
            )}
        />
    )
}

/*

                    // flowers: allGalleryFlowersJson {
                    //     nodes {
                    //         img {
                    //             publicURL
                    //             childImageSharp {
                    //                 resize(width: 415, cropFocus: CENTER, quality: 100)  {
                    //                     src
                    //                 }
                    //             }
                    //         }
                    //         caption
                    //     }
                    // }

                    */
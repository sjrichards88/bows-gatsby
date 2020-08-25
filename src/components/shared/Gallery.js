import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import ContainerMax from "components/shared/ContainerMax"
import { media } from "utils/Media"

const Thumbnail = styled.a`
    margin: 0 .5rem .5rem;
    display: inline-block;
    overflow: hidden;
    width: calc(100% - 1rem);

    @media (min-width: 400px) {
        width: calc(50% - 1rem);
    }

    @media ${media.md} {
        width: calc(33.3% - 1rem);
    }

    @media ${media.lg} {
        width: calc(25% - 1rem);
    }

    img {
        transition: all .4s ease;
        transform: scale(1);
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`

const Gallery = (props) => {
    console.log(props)
    const images = props.images.nodes.map((image, i) => {
        return(
            <Thumbnail href={image.img.publicURL} data-attribute="SRL" key={i}>
                <img src={image.img.childImageSharp.resize.src} alt="" />
            </Thumbnail>
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
                    {images}
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
                                publicURL
                                childImageSharp {
                                    resize(width: 415, cropFocus: CENTER, quality: 100)  {
                                        src
                                    }
                                }
                            }
                            caption
                        }

                    }
                    flowers: allGalleryFlowersJson {
                        nodes {
                            img {
                                publicURL
                                childImageSharp {
                                    resize(width: 415, cropFocus: CENTER, quality: 100)  {
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
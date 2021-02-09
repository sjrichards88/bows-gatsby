import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ImageWrap from "components/shared/ImageWrap"


const ImageBlock = (props) => {
    return(
        <ImageWrap as={props.to ? Link : "div"}>
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
                                    fluid(maxWidth: 576, quality: 98) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                            title
                        }
                    }
                }
                logo: file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        resize(width: 70, cropFocus: CENTER, quality: 98)  {
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
                        <ImageBlock logo={data.logo} data={node} {...newProps} key={i} />
                    )
                } else return ""
            })
        }}
    />
)
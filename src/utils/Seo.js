/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import shareImage from "images/logov2.png"

const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

function SEO({ description, lang, meta, keywords, title, image, path }) {

    const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                }
            }
        }
    `
    )

    const metaDescription = entities.decode(description) || site.siteMetadata.description
    const metaTitle = entities.decode(title) || site.siteMetadata.title
    // const metaUrl = url || site.siteMetadata.siteUrl
    const metaImage = image || site.siteMetadata.siteUrl+shareImage

    const ogurl = site.siteMetadata.siteUrl+path
    
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={metaTitle}
            // titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                            name: `keywords`,
                            content: keywords.join(`, `),
                        }
                        : []
                )
                .concat(
                	metaImage.length > 0
                        ? {
                  	        property: `og:image`,
                            content: metaImage
                        }
                        : []
                )
                .concat(meta)}
        >
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org/",
                    "@type": "WebSite",
                    "name": "Website Name Here",
                    "url": "https://www.weddingsintaormina.com"
                }
            `}
            </script>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={ogurl} />
            <meta property="og:type" content="website" />
            {/* <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}/images/share-image.jpg`} /> */}
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
    description: ``,
    url: ``,
    image: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
}

export default SEO
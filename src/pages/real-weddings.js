import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "reactstrap"
import ContainerMax from "components/shared/ContainerMax"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import ImageWrap from "components/shared/ImageWrap"

const RealWeddingsPage = (props) => (
  	<Layout title="Real Weddings">
        <PageHeader page="realweddings" title="Real Weddings" />

		<ContainerMax>
			<Row>
				{props.data.allGalleriesJson.edges.map((gallery, i) => {
					return(
						<Col sm={6} md={4} key={i}>
							<ImageWrap as={Link} to={`/gallery/${gallery.node.slug}/`}>
								<div className="img-wrapper">
									<Img fluid={gallery.node.coverPhoto.childImageSharp.fluid} alt="" />
								</div>
								<img src={props.data.logo.childImageSharp.resize.src} alt="" className="logo" />
								<p>{gallery.node.name}</p>
							</ImageWrap> 
						</Col>
					)
				})}
			</Row>
		</ContainerMax>
  	</Layout>
)

export default (props) => {
    return(
        <StaticQuery
            query={graphql`
                query {
					allGalleriesJson(filter: {type: {eq: "real-wedding"}}) {
                        edges {
                            node {
								name
								slug
								coverPhoto {
									childImageSharp {
										fluid(maxWidth: 576, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
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
				return <RealWeddingsPage data={data} />
            }}
        />
    )
}
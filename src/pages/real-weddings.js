import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "reactstrap"
import ContainerMax from "components/shared/ContainerMax"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import ImageWrap from "components/shared/ImageWrap"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const RealWeddingsPage = (props) => (
  	<Layout title="Real Weddings">
        <PageHeader 
			page="realweddings" 
			title="Real Weddings" 
			bannerImage={props.data.bannerImage.childImageSharp.fluid}
		/>

		<TextContainer>
			<Text>
				<p>Featuring a selection of some of the more recent of the many lovely weddings I have had the great pleasure of organising here in Taormina over the past 16 years</p>
				<p>Thank you to all of my couples for allowing me to share these amazing memories here.</p>
			</Text>
        </TextContainer>

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

export default () => {
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
										fluid(maxWidth: 576, quality: 85) {
											...GatsbyImageSharpFluid_withWebp
										}
									}
								}
                            }
                        }
					}
					logo: file(relativePath: { eq: "logo.png" }) {
						childImageSharp {
							resize(width: 70, cropFocus: CENTER, quality: 85)  {
								src
							}
						}
					}
					bannerImage: file(relativePath: { eq: "banners/real-weddings.jpg" }) {
						childImageSharp {
							fluid(maxWidth: 1920, quality: 85)  {
								...GatsbyImageSharpFluid_withWebp
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
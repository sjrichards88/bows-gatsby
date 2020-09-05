import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import ContainerMax from "components/shared/ContainerMax"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const ContainerMaxStyled = styled(ContainerMax)`
	padding-bottom: 2rem;

	p {
		/* font-family: ${props => props.theme.font.family.satisfy}; */
		font-size: ${props => props.theme.font.size.base};
		font-style: italic;
	}
`

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query {
            aboutme: file(relativePath: { eq: "best-day-of-our-lives.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 700, quality: 100) {
						...GatsbyImageSharpFluid_withWebp_noBase64
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
            }
        }
    `)
	
	return(
		<Layout>
			<PageHeader page="about" title="Contact" tall />
			<Img fluid={data.aboutme.childImageSharp.fluid} alt="Best Day of Our Lives" className="my-4 "/>
		</Layout>
	)
}

export default ContactPage
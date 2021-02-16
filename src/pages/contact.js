import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const ContactPage = (props) => {
	return(
		<Layout title="Contact">
			<PageHeader 
				page="contact" 
				title="Contact Me" 
				tall 
				bannerImage={props.data.bannerImage.childImageSharp.fluid}
			/>
			<TextContainer>
				<Text md>
					I hope you have enjoyed browsing around my website
				</Text>
				<Text md>
					Please feel free contact me with a few details about yourselves and the type of wedding ceremony you are interested in, preferred period and approximate number of guests etc and I will be happy to send you some information to get the ball rolling and set up a one to one consultation as required
				</Text>
				<Text md>
					Looking forward to hearing from you and being of assistance<br/><br/>

					Liz<br/><br/>

					<a href="mailto:liz@bouquetsandbows.com">liz@bouquetsandbows.com</a>
				</Text> 
			</TextContainer>
		</Layout>
	)
}

export default () => {
    return(
        <StaticQuery
            query={graphql`
                query {
					bannerImage: file(relativePath: { eq: "banners/contact-me.jpg" }) {
						childImageSharp {
							fluid(maxWidth: 1920, quality: 85)  {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
                }
            `}
            render={data => {
				return <ContactPage data={data} />
            }}
        />
    )
}
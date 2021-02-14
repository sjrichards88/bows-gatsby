import React from "react"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const ContactPage = () => {
	return(
		<Layout title="Contact">
			<PageHeader page="contact" title="Contact Me" tall />
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

export default ContactPage
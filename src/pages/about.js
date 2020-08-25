import React from "react"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const AboutPage = () => (
  	<Layout>
        <PageHeader page="about" title="About me" />
		
		<TextContainer thin>
			<Text md>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem in, possimus, enim quas quam itaque vero ipsam debitis, porro tempora accusantium quidem? Illum nulla fugiat nemo aspernatur, recusandae ab!
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem in, possimus, enim quas quam itaque vero ipsam debitis, porro tempora accusantium quidem? Illum nulla fugiat nemo aspernatur, recusandae ab!
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem in, possimus, enim quas quam itaque vero ipsam debitis, porro tempora accusantium quidem? Illum nulla fugiat nemo aspernatur, recusandae ab!
			</Text>
		</TextContainer>
  	</Layout>
)

export default AboutPage
import React from "react"
import Layout from "components/Layout/Layout"
import LandingSlider from "components/LandingSlider/LandingSlider"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"
import ImageWithText from "../components/shared/ImageWithText"

const IndexPage = () => (
  	<Layout>
		<LandingSlider />

		<TextContainer>
			<h2>
				Hello and Welcome to Bouquets and Bows
			</h2>
			<Text md>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem in, possimus, enim quas quam itaque vero ipsam debitis, porro tempora accusantium quidem? Illum nulla fugiat nemo aspernatur, recusandae ab!
			</Text>
		</TextContainer>

		<ImageWithText id="0" secondary imageRight />

		<ImageWithText id="0" imageLeft />

		<TextContainer>
			<Text md>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem in, possimus, enim quas quam itaque vero ipsam debitis, porro tempora accusantium quidem? Illum nulla fugiat nemo aspernatur, recusandae ab!
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem in, possimus, enim quas quam itaque vero ipsam debitis, porro tempora accusantium quidem? Illum nulla fugiat nemo aspernatur, recusandae ab!
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem in, possimus, enim quas quam itaque vero ipsam debitis, porro tempora accusantium quidem? Illum nulla fugiat nemo aspernatur, recusandae ab!
			</Text>
		</TextContainer>
  	</Layout>
)

export default IndexPage

import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Layout from "components/Layout/Layout"
import LandingSlider from "components/LandingSlider/LandingSlider"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"
import ImageWithText from "../components/shared/ImageWithText"
import ImageBlock from "../components/shared/ImageBlock"
import ContainerMax from "../components/shared/ContainerMax"

const IndexPage = () => (
  	<Layout>
		<LandingSlider />

		<TextContainer>
			<h2>
				Welcome to Bouquets and Bows
			</h2>
			<Text md>
				Hello! I am Liz Gaan an experienced professional wedding planner and coordinator specializing in the organisation of <strong>Bespoke Destination Weddings in Sicily</strong> and it goes without saying that the most popular Sicilian destination choice is the world famous picturesque town of <strong>Taormina</strong> perched 200 metres above the sea.
			</Text>
			<Text md>
				Your wedding is a very special and unique event that will leave you with wonderful everlasting memories, so you deserve only the very best. I am the longest established wedding planner in the whole of the Taormina area and I live right here in the very heart of Taormina, therefore a 100% personal, hands-on service is guaranteed.
			</Text>
			<Text md>
				Having had the pleasure of organizing and styling nearly 300 lovely weddings of all types and sizes in these past sixteen years, my wealth of knowledge and experience as your wedding planner is invaluable and will be fundamental in making the difference that matters to you for a perfect and successful destination wedding in Taormina. I will work closely with you to understand your vision and bring it to life, looking after all of your wedding arrangements with efficient dedication to exceed your expectations and ensure you an exceptional experience.
			</Text> 
		</TextContainer>

		{/* 6 panels */}
		<h3 className="text-center pt-4">
			My Services
		</h3>
		<ContainerMax>
			<Row className="pt-4">
				<Col sm={6} md={4}>
					<ImageBlock id="0" />
				</Col>
				<Col sm={6} md={4}>
					<ImageBlock id="1" />
				</Col>
				<Col sm={6} md={4}>
					<ImageBlock id="2" />
				</Col>
				<Col sm={6} md={4}>
					<ImageBlock id="3" />
				</Col>
				<Col sm={6} md={4}>
					<ImageBlock id="4" />
				</Col>
				<Col sm={6} md={4}>
					<ImageBlock id="5" />
				</Col>
			</Row>
		</ContainerMax>

		<TextContainer>
			<Text md>
				All of my signature weddings from the smallest and simplest to the largest and most lavish are unique events. Everything is tailored to suit your individual requirements and to satisfy your personal needs. You really can have pretty much whatever you like (within reason of course…)
			</Text>
		</TextContainer>



		<ImageWithText id="0" secondary imageRight />

		<ImageWithText id="1" imageLeft />

		<ImageWithText id="2" secondary imageRight />

		<TextContainer>
			<Text md>
				I can work with you to plan your entire event from start to finish, or simply assist you with the legalities and paperwork required for a religious or civil wedding in Taormina, which needs a professional interpreter and a local delegated person to handle things on your behalf. I take care of all of the paperwork and administration bureaucracy for my couples and most importantly, ensure that all the legal requirements are respected.
			</Text> 
			<Text md>
				I will gladly supply you with references from the many couples I have assisted in these past years who will be more than happy to vouch for my credibility and excellent service as your personal wedding planner.
			</Text>
			<Text md>
				I am very proud to say that all of the photographs published here on my website and on my social pages are all from weddings organised by me.
			</Text>

			<Text md>
				Please <Link to="/contact/">contact</Link> me I sincerely look forward to being of assistance to you.
			</Text>
		</TextContainer>
  	</Layout>
)

export default IndexPage

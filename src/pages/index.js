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
			{/* <h2>
			   GET MARRIED IN SICILY - The Perfect Wedding Island!
			</h2>
			<h3>
				Highly Experienced Professional Wedding Planner and Coordinator based in Taormina Sicily
			</h3> */}
			<h2>
				Hello and Welcome to Bouquets and Bows
			</h2>

			<Text md>
				I am a highly experienced professional wedding planner and coordinator specialising in the organization of <strong>Bespoke Destination Weddings in Sicily</strong>, and it goes without saying that the most popular Sicilian destination choice is the world famous picturesque town of <strong>Taormina</strong> perched 200 metres above the sea.
			</Text>

			<Text md>
				I am the longest established wedding planner in the whole of the Taormina area. 
				I live locally, right here in the very heart of Taormina, therefore a 100% personal, hands-on service is guaranteed. I have been planning, organising and styling weddings here in Taormina since 2004 and have a vast knowledge and great experience in this sector, having arranged nearly 300 lovely weddings of all types and sizes in these past sixteen years.
			</Text>

			<Text md>
				Your wedding is a very special and unique event that will leave you with wonderful everlasting memories. My vast experience is fundamental in making the difference that matters to you for a successful destination wedding in Taormina. Enjoy stress-free wedding planning by letting me take care of everything for you.
			</Text> 

			
		</TextContainer>

		<ImageWithText id="0" secondary imageRight />

		<ImageWithText id="1" imageLeft />

		<TextContainer>
			<Text md>
				All of my weddings from the smallest and simplest to the larger and most lavish are unique events which are tailored to suit your personal requirements with services adapted and modified to suit your personal needs. You really can have pretty much whatever you like (within reason of course…)
			</Text> 
		</TextContainer>


		<ImageWithText id="2" secondary imageRight />

		<TextContainer>
			<Text md>
				I can  work with you to plan your entire event from start to finish, or simply assist you with the legalities and paperwork required for a religious or civil wedding in Taormina, which needs a professional interpreter and a local delegated person to handle things on your behalf. I handle all of the paperwork and administration bureaucracy for my couples and most importantly, ensure that all the legal requirements are respected.
			</Text> 
			<Text md>
				I will be more than happy to supply you with references from the many couples I have assisted in these past years who will be more than happy to vouch for my credibility and excellent service as your personal wedding planner.
			</Text>
			<Text md>
				I am very proud to say that all of the photographs published here on my website and on my social pages are all from weddings organised by me. 
			</Text>

			<Text md>
				Please contact me I sincerely look forward to being of assistance to you. 
			</Text>

			<Text md cinzel primary xl>
				Bouquets and Bows “Experience Shows”
			</Text>
		</TextContainer>
  	</Layout>
)

export default IndexPage

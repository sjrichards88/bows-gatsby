import React from "react"
import styled from "styled-components"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import ContainerMax from "components/shared/ContainerMax"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const ContainerMaxStyled = styled(ContainerMax)`
	p {
		font-family: ${props => props.theme.font.family.satisfy};
		font-size: ${props => props.theme.font.size.lg};
	}
	
	img {
		max-width: 50%;
    	padding-right: 40px;
		float: left;
    	padding-bottom: 20px;
	}
`

const AboutPage = () => (
  	<Layout>
        <PageHeader page="about" title="About me" />
		
		<TextContainer thin>
			<Text md>
				A reputable and established professional organization based in Taormina, owned and managed by Liz Gaan (Spartà). Legally registered at the Chamber of Commerce in Messina and fully insured in respect of the assistance and services offered.
			</Text>

			<Text md>
				My personal introduction will give you a good idea of the Wedding Planner and Coordinator you will be working directly with in regards to all aspects of your very special day.
			</Text>
		
		</TextContainer>

		<ContainerMaxStyled>
			<img src="http://placehold.it/800x1000" alt="" />

			<Text>
				Dear Visitors, 
			</Text>

			<Text>
				I look forward to being of assistance to you with your wedding here in Taormina. I just wanted to introduce myself and tell you a little bit about me, as I am a great believer that personal contact and first impressions are very important, particularly in this very special field.
			</Text>

			<Text>
				I was born and raised in London of Italian descent, and I am perfectly fluent in both spoken and written English and Italian. In my late teens, bored with my job in Barclays Bank, I got the travel bug and after a couple of worldwide trips eventually ended up in Sicily, where I permanently settled. I have two wonderful children who grew up here, but are now both living and working in England. Having lived in Sicily for more than thirty years, I now consider myself to be a true "local" and I have acquired an excellent in-depth knowledge of this island and of Taormina in particular.
			</Text>

			<Text>
				As well as being a legally registered Wedding & Events Planner and Coordinator, I am also a qualified Interpreter and a fully Licensed Tour Guide with a great passion for Sicily. My work experiences over these many years here in Sicily are wide and varied, ranging from Travel Agency work and the organising and guiding of Excursions and Coach Tours, to the planning and organisation of large Conferences and Corporate Events. Before launching my own independent Company “Bouquets and Bows” in the Spring of 2004, I was employed for eight years by a leading UK Specialist Tour Operator as their Regional Manager for Sicily, in charge of a team of resort representatives and completely responsible for the running of the whole of the Sicilian side of their business. 
			</Text>

			<Text>
				With a broad portfolio of experience in Sicilian tourism and the travel industry behind me, Wedding and Event Planning became the logical enhancement of my career using my vast local knowledge in a very original and successful way, to organise many lovely weddings here in Taormina.
			</Text>

			<Text>
				I am very proud to say that I am the longest established wedding planner here in the whole of the Taormina area, and indeed I was actually one of the first wedding planners in the whole of Italy to offer destination weddings in this fabulous resort of Taormina. Now after having had the pleasure of organising nearly 300 weddings of all types and sizes in these past sixteen years, my experience to you as your Wedding Planner is invaluable.
			</Text>

			<Text>
				I am very much a “people” person, bubbly and lively and my enthusiasm is contagious. I am a real stickler for perfection and detail and I repute myself to be highly professional with good interpersonal and organisational skills.
			</Text> 

			<Text>
				Every single wedding and each and every couple I work with are very special to me and are all treated with my utmost attention. Wedding planning is not just a job to me it is my life. I am extremely dedicated and passionate about both my profession and about Taormina. I am sure you will get to love Sicily as much as I do, and find Taormina to be the perfect choice for your very special and unique Destination Wedding.
			</Text>
		</ContainerMaxStyled>
  	</Layout>
)

export default AboutPage
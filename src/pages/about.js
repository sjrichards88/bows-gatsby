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
		font-size: ${props => props.theme.font.size.lg};
	}
`

const AboutPage = () => {
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
			<PageHeader page="about" title="About me" tall />
			
			<TextContainer thin>
				<Text md>
					<strong>Weddings in Taormina by Bouquets and Bows</strong> is independently run by Liz Gaan (Spartà) a professional and established bilingual wedding and event planner based in Taormina
				</Text>
			
			</TextContainer>

			<ContainerMaxStyled>
				<Row>
					<Col md={6}>
						<img src="https://placehold.it/800x800" alt="" />
					</Col>
					<Col md={6}>
						<Text>
							Dear Visitors, 
						</Text>

						<Text>
							I look forward to being of assistance to you with your wedding here in Taormina. I just wanted to introduce myself and tell you a little bit about me, as I am a great believer that personal contact and first impressions are very important, particularly in this very special field.
						</Text>

						<Text>
							I was born and raised in London of Italian descent Italian. In my late teens, bored with my job in Barclays Bank, I got the travel bug and after a couple of worldwide trips eventually ended up in Sicily, where I permanently settled. Having lived here in Sicily for more than 30 years, I now consider myself to be a true "local" and I have acquired an excellent in-depth knowledge of this island and of Taormina in particular.
						</Text>

						<Text>
							As well as being a legally registered Wedding & Events Planner, I am also a qualified Interpreter and a fully Licensed Tour Guide with a great passion for Sicily. My work experiences are wide and varied; ranging from Travel Agency work, organising and guiding Excursions and Tours, to the planning and organisation of large Conferences and Corporate Events. Before launching “Bouquets and Bows” in the Spring of 2004,  I was Regional Manager for Sicily for 8 years for a leading UK Specialist Tour Operator completely responsible for the running of the whole of the Sicilian side of their business. 
						</Text>

						<Text>
							With a broad portfolio of experience in Sicilian tourism and the travel industry behind me, Wedding and Event Planning became the logical enhancement of my career using my vast local knowledge in a very original and successful way, to organise many lovely weddings here in Taormina. I was actually one of the first wedding planners in the whole of Italy to offer destination weddings in this fabulous resort of Taormina. 
						</Text>
					</Col>
				</Row>
			</ContainerMaxStyled>


			<ContainerMaxStyled>
				<Row>
					<Col md={6}>
						<Text>
							I am very much a “people” person, bubbly and lively and my enthusiasm is contagious. I am a real stickler for perfection and attention to detail and I repute myself to be highly professional with good interpersonal and organisational skills. 
						</Text>

						<Text>
							Every single wedding and each and every couple I work with are very special to me and are all treated with my utmost dedication. My goal is to always exceed expectations. Wedding Planning is not just a job to me it is my life. I am extremely passionate about both my profession and Taormina. I am sure you will get to love Sicily as much as I do, and find Taormina to be the perfect choice for your very special and unique Destination Wedding.
						</Text>
					</Col>
					<Col md={6}>
						<img src="https://placehold.it/800x500" alt="" />
					</Col>
				</Row>
			</ContainerMaxStyled>

			{/* Best day o f lives phoho */}

			<Container>
				<Row className="justify-content-center">
					<Col md={9}>
						<Img fluid={data.aboutme.childImageSharp.fluid} alt="Best Day of Our Lives" className="mb-4 "/>
					</Col>
				</Row>
			</Container>

			<ContainerMaxStyled className="text-center">
				<Text>
					All of the photographs used throughout my website and on my social pages are all from weddings I have had the pleasure of organising here in the Taormina area. So a huge thank you to my wonderful photographers who have captured the true essence of Weddings in Taormina and to all of my lovely couples for allowing me use their beautiful photographs here and elsewhere. 
				</Text>

				<Text>
					I have greatly contributed to the design and content of this website, so I hope you enjoy browsing around it. I wanted it to be interesting and easy to navigate, because I think that this is a good reflection of  myself and my service which like my site, is straightforward, honest and useful, with no hidden surprises!
				</Text>

				<Text>
					I hope to hear from you soon and look forward to making your acquaintance. to arrange a beautiful and memorable wedding day.
				</Text>

				<Text>
					Please do not hesitate to contact me <a href="mailto:liz@bouquetsandbows.com">liz@bouquetsandbows.com</a>
				</Text>

				<Text>
					My kindest regards<br/>
					Liz  
				</Text>
				
				<Text md center cinzel primary xl>
					Bouquets and Bows “Experience Shows”
				</Text>
			</ContainerMaxStyled>
		</Layout>
	)
}

export default AboutPage
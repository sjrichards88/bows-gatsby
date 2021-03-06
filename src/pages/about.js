import React from "react"
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

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            aboutme: file(relativePath: { eq: "best-day-of-our-lives.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 700, quality: 98) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
            }
            about: file(relativePath: { eq: "about.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 800, quality: 98) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
            }
			bannerImage: file(relativePath: { eq: "banners/banner-about.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1920, quality: 85)  {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
        }
    `)
	
	return(
		<Layout title="About">
			<PageHeader 
				page="about" 
				title="About Me" 
				tall 
				bannerImage={data.bannerImage.childImageSharp.fluid}
			/>
			
			<TextContainer thin>
				<Text md>
					<strong>Weddings in Taormina by Bouquets and Bows</strong> is independently run by Liz Gaan a professional and established bilingual wedding and event planner based in Taormina
				</Text>
			
			</TextContainer>

			<ContainerMaxStyled className="pt-4">

				<Img fluid={data.about.childImageSharp.fluid} alt="" className="mb-4 " style={{ float: "left", width: "35%", maxHeight: "100%", margin: "0 2rem .5rem 0" }} />

				<Text>
					Dear Visitors, 
				</Text>

				<Text>
					I look forward to being of assistance to you with your wedding here in Taormina. I just wanted to introduce myself and tell you a little bit about me, as I am a great believer that personal contact and first impressions are very important, particularly in this very special field.
				</Text>

				<Text>
					I was born and raised in London of Italian descent. In my late teens, bored with my job in Barclays Bank, I got the travel bug and after a couple of worldwide trips eventually ended up in Sicily, where I permanently settled. Having lived here in Sicily for more than 30 years, I now consider myself to be a true "local" and I have acquired an excellent in-depth knowledge of this island and of Taormina in particular.
				</Text>

				<Text>
					As well as being a legally registered Wedding & Events Planner, I am also a qualified Interpreter and a fully Licensed Tour Guide with a great passion for Sicily. My work experiences are wide and varied; ranging from Travel Agency work, organising and guiding Excursions and Tours, to the planning and organisation of large Conferences and Corporate Events. Before launching “Bouquets and Bows” in the Spring of 2004,  I was Regional Manager for Sicily for 8 years for a leading UK Specialist Tour Operator completely responsible for the running of the whole of the Sicilian side of their business. 
				</Text>

				<Text>
					With a broad portfolio of experience in Sicilian tourism and the travel industry behind me, Wedding and Event Planning became the logical enhancement of my career using my vast local knowledge in a very original and successful way, to organise many lovely weddings here in Taormina. I was actually one of the first wedding planners in the whole of Italy to offer destination weddings in this fabulous resort of Taormina. 
				</Text>

				<Text>
					I am very much a “people” person, bubbly and lively and my enthusiasm is contagious. I am a real stickler for perfection and attention to detail and I repute myself to be highly professional with good interpersonal and organisational skills. 
				</Text>

				<Text>
					Every single wedding and each and every couple I work with are very special to me and are all treated with my utmost dedication. My goal is to always exceed expectations. Wedding Planning is not just a job to me, it is my life. I am extremely passionate about both my profession and Taormina. I am sure you will get to love Sicily as much as I do, and find Taormina to be the perfect choice for your very special and unique Destination Wedding.
				</Text>

				<Text>
					All of the photographs used throughout my website and on my social pages are all from weddings I have had the pleasure of organising here in the Taormina area. So a huge thank you to my wonderful photographers who have captured the true essence of Weddings in Taormina and to all of my lovely couples for allowing me use their beautiful photographs here and elsewhere. 
				</Text>

				<Text>
					I have greatly contributed to the design and content of this website, so I hope you enjoy browsing around it. I wanted it to be interesting and easy to navigate, because I think that this is a good reflection of  myself and my service which like my site, is straightforward and honest, with no hidden surprises!
				</Text>

				<Text>
					I hope to hear from you soon and look forward to making your acquaintance to arrange a beautiful and memorable wedding day.
				</Text>

				<Text>
					Please do not hesitate to contact me <a href="mailto:liz@bouquetsandbows.com">liz@bouquetsandbows.com</a>
				</Text>

				<Text>
					My kindest regards<br/>
					Liz  
				</Text>
			</ContainerMaxStyled>
		</Layout>
	)
}

export default AboutPage
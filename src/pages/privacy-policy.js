import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const PrivacyPage = (props) => {
    return(
        <Layout title="Privacy">
            <PageHeader 
                page="privacy" 
                title="Privacy Policy" 
                taller 
                bannerImage={props.data.bannerImage.childImageSharp.fluid}
            />

            <TextContainer>
                {/* <Text md>
                    As a legally registered Wedding and Events Planner at the Chamber of Commerce in Messina, I as your key supplier, maintain an adequate policy of insurance in respect of all liabilities, claims, damages, expenses, legal costs and all other sums of whatever nature that as a supplier I may incur towards, or in respect of any client. Such insurance cover is adequate and appropriate in line with Italian custom and practice and with the usual conditions and standards applicable in Italy where the services are to be provided, in line with the particular business in which the supplier operates.
                </Text> */}
                <Text>
                    <strong>
                        P.IVA: 0273893083<br/>
                        CCIAA ME: 189728
                    </strong>
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
					bannerImage: file(relativePath: { eq: "banners/privacy.jpg" }) {
						childImageSharp {
							fluid(maxWidth: 1920, quality: 85)  {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
                }
            `}
            render={data => {
				return <PrivacyPage data={data} />
            }}
        />
    )
}
import React from "react"
import Layout from "components/Layout/Layout"
import PageHeader from "components/shared/PageHeader"
import TextContainer from "components/shared/TextContainer"
import Text from "components/shared/Text"

const CookiesPage = () => {
    return(
        <Layout>
            <PageHeader page="about" title="Cookie Policy" />

            <TextContainer>
                <Text md>
                    As a legally registered Wedding and Events Planner at the Chamber of Commerce in Messina, I as your key supplier, maintain an adequate policy of insurance in respect of all liabilities, claims, damages, expenses, legal costs and all other sums of whatever nature that as a supplier I may incur towards, or in respect of any client. Such insurance cover is adequate and appropriate in line with Italian custom and practice and with the usual conditions and standards applicable in Italy where the services are to be provided, in line with the particular business in which the supplier operates.
                </Text>
                <Text>
                    <strong>Partita Iva 0273</strong>
                </Text>
            </TextContainer>
        </Layout>
    )
}

export default CookiesPage
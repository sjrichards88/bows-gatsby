import React from "react"
import Layout from "components/Layout/Layout"
import Gallery from "components/shared/Gallery"
import PageHeader from "components/shared/PageHeader"

const GalleryPage = (props) => {
    return(
        <Layout>
            <PageHeader page="gallery" title="Gallery" />

            <Gallery name={props.pageContext.slug} />
        </Layout>
    )
}

// export const pageQuery = graphql`
// query($id: String!) {
//     wpPage(id: {eq: $id}) {
//         title
//         uri
//         seo {
//             title
//             metaDesc
//         }
//         ...featuredTemplateQuery
//     }
// }
// `

export default GalleryPage
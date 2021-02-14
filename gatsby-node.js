/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Create galleries
    const galleries = await graphql(`
        query {
            allGalleriesJson {
                nodes {
                    name
                    slug
                    introText
                    fullText
                }
            }
        }
    `)

    galleries.data.allGalleriesJson.nodes.map(async (node) => {
        const galleryPath = node.slug !== "" ? `/gallery/${node.slug}/` : `/gallery/`

        await actions.createPage({
            path: galleryPath,
            component: slash(path.resolve(`./src/templates/GalleryTemplate.js`)),
            context: {
                slug: node.slug,
                name: node.name,
                introText: node.introText,
                fullText: node.fullText
            },
        })
    })
}
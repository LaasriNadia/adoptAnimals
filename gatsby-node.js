const path = require('path')

module.exports.createPages = async ({
    graphql,
    actions
}) => {
    const {
        createPage
    } = actions
    const blogTemplate = path.resolve('./src/templates/DetailsPage.jsx')
    const res = await graphql(`
        query {
            allContentfulAnimales{
                edges {
                  node {
                    type
                    slug
                  }
                }
              }
        }
    `)

    res.data.allContentfulAnimales.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/${edge.node.type}/${edge.node.slug}`,
            context: {
                type: edge.node.type,
                slug: edge.node.slug
            }
        })
    })
}
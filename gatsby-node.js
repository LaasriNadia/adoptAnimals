const path = require("path")
const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for node to use creating pages
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/DetailsPage.jsx")
  const res = makeRequest(
    graphql,
    `
    query {
      allContentfulAnimales (sort: {fields: createdAt, order: DESC}
        filter:{ node_locale:{eq:"en-US"}},) {
        edges {
          node {
            type
            slug
          }
        }
      }
    }
  `
  ).then(result => {
    result.data.allContentfulAnimales.edges.forEach(edge => {
      createPage({
        component: blogTemplate,
        path: `/${edge.node.type}/${edge.node.slug}`,
        context: {
          type: edge.node.type,
          slug: edge.node.slug,
        },
      })
    })
  })
// create page for all animals
  const getAnimals = makeRequest(
    graphql,
    `
    {
      allContentfulAnimales (sort: {fields: createdAt, order: DESC}
            filter:{ node_locale:{eq:"en-US"}},) 
            {
        edges {
            node {
            slug
            id
            }
        }
        }
    }
    
    `
  ).then(result => {
    const blogs = result.data.allContentfulAnimales.edges
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/animals/all` : `/animals/all/${i + 1}`,
        component: path.resolve("./src/templates/AnimalsPage.jsx"),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
  // create category Dogs page 
  const getDogs = makeRequest(
    graphql,
    `
{
  allContentfulAnimales (sort: {fields: createdAt, order: DESC}
        filter:{ node_locale:{eq:"en-US"},type:{eq : "Dogs"}},) 
        {
    edges {
        node {
        slug
        id
        }
    }
    }
}

`
  ).then(result => {
    const blogs = result.data.allContentfulAnimales.edges
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/dogs` : `/category/dogs/${i + 1}`,
        component: path.resolve("./src/templates/DogsPage.jsx"),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
  
  // create category Dogs page 
  const getCats = makeRequest(
    graphql,
    `
{
  allContentfulAnimales (sort: {fields: createdAt, order: DESC}
        filter:{ node_locale:{eq:"en-US"},type:{eq : "Cats"}},) 
        {
    edges {
        node {
        slug
        id
        }
    }
    }
}

`
  ).then(result => {
    const blogs = result.data.allContentfulAnimales.edges
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/cats` : `/category/cats/${i + 1}`,
        component: path.resolve("./src/templates/CatsPage.jsx"),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  // create category Brids page 
  const getBirds = makeRequest(
    graphql,
    `
{
  allContentfulAnimales (sort: {fields: createdAt, order: DESC}
        filter:{ node_locale:{eq:"en-US"},type:{eq : "Birds"}},) 
        {
    edges {
        node {
        slug
        id
        }
    }
    }
}

`
  ).then(result => {
    const blogs = result.data.allContentfulAnimales.edges
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/birds` : `/category/birds/${i + 1}`,
        component: path.resolve("./src/templates/BirdsPage.jsx"),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

}

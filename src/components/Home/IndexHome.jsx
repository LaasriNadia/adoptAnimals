import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import "./homeStyles.css"
export default () => (
  <StaticQuery
    query={graphql`
      query IndexHomeQuery {
        allContentfulAnimales(
          limit: 9
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
        ) {
          edges {
            node {
              id
              slug
              type
              city
              name
              images {
                fluid(maxWidth: 1200, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="feed">
        {" "}
        {data.allContentfulAnimales.edges.map(edge => (
          <div
            className="card"
            key={edge.node.id}
            style={{
              backgroundImage: `linear-gradient(
                        to bottom,
                        rgba(10,10,10,0) 0%,
                        rgba(10,10,10,0) 50%,
                        rgba(10,10,10,0.7) 100%),
                        url(${edge.node.images.fluid.src})`,
            }}
            onClick={() => navigate(`/${edge.node.type}/${edge.node.slug}`)}
          >
            <p className="card__category"> {edge.node.city} </p>
            <p className="card__title"> {edge.node.name} </p>{" "}
          </div>
        ))}{" "}
      </div>
    )}
  />
)

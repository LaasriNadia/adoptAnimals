import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"

export const query = graphql`
  query($slug: String!, $type: String!) {
    contentfulAnimales(slug: { eq: $slug }, type: { eq: $type }) {
      name
      type
      age
      description {
        description
      }
      images {
        fluid(maxWidth: 1200, quality: 85) {
          src
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
    }
  }
`

const Details = props => {
  return (
    <Layout>
      <div
        style={{
          height: "500px",
          backgroundImage: `url(${props.data.contentfulAnimales.images.fluid.src}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p> {props.data.contentfulAnimales.name} </p>
      <p> {props.data.contentfulAnimales.age} </p>
      <p> {props.data.contentfulAnimales.type} </p>
      <p> {props.data.contentfulAnimales.createdAt} </p>
      <p> {props.data.contentfulAnimales.description.description} </p>
    </Layout>
  )
}

export default Details

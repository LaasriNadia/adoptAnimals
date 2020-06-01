import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout.jsx"
import "./DetailsPageStyles.css"
export const query = graphql`
  query($slug: String!, $type: String!) {
    contentfulAnimales(slug: { eq: $slug }, type: { eq: $type }) {
      name
      type
      age
      sex
      city
      description {
        description
      }
      images {
        fluid {
          src
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
    }
  }
`

const Details = props => {
  return (
    <>
      {/* <Layout> */}
      <div className="details">
        <div>
          <img
            src={props.data.contentfulAnimales.images.fluid.src}
            alt="pet image"
            style={{ width: "100%", height: "550px" }}
          />
        </div>
        <div className="details-content">
          <label>Name:</label>
          <h4> {props.data.contentfulAnimales.name} </h4>
          <br />
          <label>Age:</label>
          <h4> {props.data.contentfulAnimales.age} Month </h4>
          <br />

          <label>Sex:</label>
          <h4> {props.data.contentfulAnimales.sex ? "Male" : "Female"} </h4>
          <br />
          <label>Category:</label>
          <h4> {props.data.contentfulAnimales.type} </h4>
          <br />
          <label>City:</label>
          <h4> {props.data.contentfulAnimales.city} </h4>
          <br />
          <label>Published at:</label>
          <h4> {props.data.contentfulAnimales.createdAt} </h4>
          <br />
          <label>Description:</label>
          <p> {props.data.contentfulAnimales.description.description} </p>
          <div className="buttons">
            <Link to="/apply">Apply for adoption</Link>
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </>
  )
}

export default Details

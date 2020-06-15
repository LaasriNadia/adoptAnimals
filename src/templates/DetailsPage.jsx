import React from "react"
import { graphql, Link } from "gatsby"
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
      <div className="header__section">
        <div className="header__hero"></div>
        <div className="details">
          <div className="details_container">
            <div className="img_container">
              <img
                id="imgDetailPage"
                src={props.data.contentfulAnimales.images.fluid.src}
                alt="pet_picture"
              />
            </div>
            <div className="details-content">
              <span>Name:</span>
              <h4> {props.data.contentfulAnimales.name} </h4>
              <br />
              <span>Age:</span>
              <h4> {props.data.contentfulAnimales.age} Month </h4>
              <br />

              <span>Sex:</span>
              <h4> {props.data.contentfulAnimales.sex ? "Male" : "Female"} </h4>
              <br />
              <span>Category:</span>
              <h4> {props.data.contentfulAnimales.type} </h4>
              <br />
              <span>City:</span>
              <h4> {props.data.contentfulAnimales.city} </h4>
              <br />
              <span>Published at:</span>
              <h4> {props.data.contentfulAnimales.createdAt} </h4>
              <br />
              <span>Description:</span>
              <h4> {props.data.contentfulAnimales.description.description} </h4>

              <p>Informations about the publisher:</p>
              <span>Phone Number:</span>
              <h4> {props.data.contentfulAnimales.phone} </h4>
              <span>Email:</span>
              <h4> {props.data.contentfulAnimales.email} </h4>

              <div className="buttons">
                <Link to="/">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details

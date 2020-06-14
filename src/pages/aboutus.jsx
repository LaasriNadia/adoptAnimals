import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./aboutStyles.css"

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      {
        contentfulContentHeader {
          description
          featuredImage {
            fluid(maxWidth: 1200, quality: 85) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="header__section">
          <div
            className="header__hero"
            style={{
              backgroundImage: `url(${data.contentfulContentHeader.featuredImage.fluid.src})`,
            }}
          ></div>

          <div className="about">
            <div className="about_cont">
              <h2>About Us</h2>
              <p>
              Adoption Animal is a non-profit Moroccan association. 
              Our mission  is to help get homeless pets out of the shelters and into loving homes.
              And people can looking for someone to adopt their pet and also for persons who are looking for pets to adopt.
              </p>
            </div>
          </div>
        </div>
      </>
    )}
  />
)

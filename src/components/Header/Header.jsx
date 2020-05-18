import React from "react"
import { graphql, StaticQuery } from "gatsby"

import "./headerStyles.css"
export default () => (
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
      <header>
        <div className="header__section">
          <div
            className="header__hero"
            style={{
              backgroundImage: `url(${data.contentfulContentHeader.featuredImage.fluid.src})`,
            }}
          ></div>
          <div className="header__content">
            <div className="header__info">
              <h1 className="header_title">
                {data.contentfulContentHeader.description}
              </h1>
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

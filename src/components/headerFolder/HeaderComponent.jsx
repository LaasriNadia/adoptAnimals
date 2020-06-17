import React from "react"
import { graphql, StaticQuery } from "gatsby"

import "./headerStyles.css"
export default () => (
  <StaticQuery
    query={graphql`
      {
        contentfulContentHeader {
          description
        }
      }
    `}
    render={data => (
      <header>
        <div className="header__section">
          <div className="header__hero"></div>
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

import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./aboutStyles.css"
import Layout from "../components/Layout/Layout.jsx"

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
      // console.log()
      // <Layout>
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
              <h2>About</h2>
              {/* <span>{location.state.user}</span> */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Libero, expedita? Deleniti quisquam ipsum amet illum
                necessitatibus, eum obcaecati aliquid quam! Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Similique, quia? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Magnam amet
                sequi corporis, error tempora, iure sint laborum fugiat
                similique velit qui quod totam assumenda! Officiis, iste facere?
                Maiores voluptate maxime incidunt praesentium ipsa, eum numquam
                tempora doloremque? Facilis quidem laboriosam animi suscipit
                sint, obcaecati unde omnis eius dolor exercitationem tempore
                cumque recusandae.
              </p>
            </div>
          </div>
        </div>
        {/* </Layout> */}
      </>
    )}
  />
)

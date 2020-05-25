import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout.jsx"
const Login = () => {
  const pictureData = useStaticQuery(graphql`
    query {
      contentfulContentHeader {
        description
        featuredImage {
          fluid(maxWidth: 1200, quality: 85) {
            src
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="header__section">
        <div
          className="header__hero"
          style={{
            backgroundImage: `url(${pictureData.contentfulContentHeader.featuredImage.fluid.src})`,
          }}
        ></div>
      </div>

      <div className="about">
        <div className="about_cont">
          <h2>Login page</h2>
          Login form
        </div>
      </div>
    </Layout>
  )
}
export default Login

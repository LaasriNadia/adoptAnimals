import React from "react"
import "./contactStyles.css"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout.jsx"
import githubIcon from "../images/github.png"
import twitterIcon from "../images/twitter.png"
const Contact = () => {
  const pictureContactPage = useStaticQuery(graphql`
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
            backgroundImage: `url(${pictureContactPage.contentfulContentHeader.featuredImage.fluid.src})`,
          }}
        ></div>
        <div className="contact">
          <div className="auth">
            <h2 className="name">Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
              expedita? Deleniti quisquam ipsum amet illum necessitatibus, eum
              obcaecati aliquid quam!
            </p>
            <ul>
              <li>
                <a href="/">
                  {" "}
                  <img src={githubIcon} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <img src={twitterIcon} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="auth">
            <h2 className="name">Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
              expedita? Deleniti quisquam ipsum amet illum necessitatibus, eum
              obcaecati aliquid quam!
            </p>
            <ul>
              <li>
                <a href="/">
                  {" "}
                  <img src={githubIcon} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <img src={twitterIcon} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Contact

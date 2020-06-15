import React from "react"
import "./contactStyles.css"
import { graphql, useStaticQuery } from "gatsby"
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
    <>
      <div className="header__section">
        <div
          className="header__hero"
          style={{
            backgroundImage: `url(${pictureContactPage.contentfulContentHeader.featuredImage.fluid.src})`,
          }}
        ></div>
        <div className="contact">
          <div className="auth">
            <h2 className="name">Laasri Nadia</h2>
            <p>
              I'm a Front-end-developer. I love creating new websites by
              bringing ideas to real life. find more about me by clicking on the
              social media links.
            </p>
            <ul>
              <li>
                <a href="https://github.com/LaasriNadia">
                  {" "}
                  <img src={githubIcon} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/laasrinadiaa">
                  {" "}
                  <img src={twitterIcon} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="auth">
            <h2 className="name">Ismail El Mahi</h2>
            <p>
            I am a Self-Taught Front-End Developer. 
            I have a passion to building and maintaining responsive websites in different fields.
            </p>
            <ul>
              <li>
                <a href="https://github.com/ismail-elmahi">
                  {" "}
                  <img src={githubIcon} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ismail1elmahi">
                  {" "}
                  <img src={twitterIcon} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact

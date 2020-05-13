import React from "react"
import "./contact.css"
import Layout from "../components/Layout/layout"
import githubIcon from "../images/github.png"
import twitterIcon from "../images/twitter.png"
const Contact = () => {
  return (
    <Layout>
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
    </Layout>
  )
}
export default Contact

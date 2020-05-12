import React from "react"
import "./contact.css"
const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        {" "}
        <h1>Contact Us</h1>
        <hr />
      </div>

      <div className="contact">
        <div className="auth">
          <h2 className="name">Test Test</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            expedita? Deleniti quisquam ipsum amet illum necessitatibus, eum
            obcaecati aliquid quam!
          </p>
          <ul>
            <li>Github icon</li>
            <li>Twitter icon</li>
          </ul>
        </div>
        <hr />
        <div className="auth">
          <h2 className="name">Test Test</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            expedita? Deleniti quisquam ipsum amet illum necessitatibus, eum
            obcaecati aliquid quam!
          </p>
          <ul>
            <li>Github icon</li>
            <li>Twitter icon</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Contact

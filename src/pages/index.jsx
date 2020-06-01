import React from "react"
import { Link } from "gatsby"
import HeaderComponent from "../components/headerFolder/HeaderComponent.jsx"
import Home from "../components/Home/IndexHome.jsx"
import "./indexStyle.css"
const IndexPage = () => (
  <>
    <HeaderComponent />
    <Home />
    <Link to="/animals/all" className="viewmore">
      {" "}
      View More{" "}
    </Link>{" "}
  </>
)

export default IndexPage

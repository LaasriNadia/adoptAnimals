import React from "react"
import { Link } from "gatsby"
import HeaderComponent from "../components/Header/HeaderComponent.jsx"
import Layout from "../components/Layout/Layout.jsx"
import Home from "../components/Home/IndexHome.jsx"
import "./indexStyle.css"
const IndexPage = () => (
  <Layout>
    <HeaderComponent />
    <Home />
    <Link to="/animals/all" className="viewmore">
      {" "}
      View More{" "}
    </Link>{" "}
  </Layout>
)

export default IndexPage

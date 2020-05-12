import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/index"
import Layout from "../components/Layout/layout"
import Home from "../components/Home/index"
import "./index.css"
import Nav from "../components/Nav/index"
const IndexPage = () => (
  <Layout>
    {/* <Nav /> */}
    <Header />
    <Home />
    <Link to="/animals/all" className="viewmore">
      {" "}
      View More{" "}
    </Link>{" "}
  </Layout>
)

export default IndexPage

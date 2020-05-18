import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/Header.jsx"
import Layout from "../components/Layout/layout.jsx"
import Home from "../components/Home/indexHome.jsx"
import "./indexx.css"
const IndexPage = () => (
  <Layout>
    <Header />
    <Home />
    <Link to="/animals/all" className="viewmore">
      {" "}
      View More{" "}
    </Link>{" "}
  </Layout>
)

export default IndexPage

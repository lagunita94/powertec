import React from "react"
import "../components/layout.css"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
export default function Layout({ children }) {
  return (
    <div className="main">
      <SEO title="Powertec" />
        <Header/>
      {children}
    <Footer />
    </div>
  )
}
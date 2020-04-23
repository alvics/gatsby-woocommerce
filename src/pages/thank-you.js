import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const thankYouPage = () => (
  <Layout>
    <SEO title="Thank you" />
    <div className="thank-you">
      <h3>Thanks</h3>
      <p>Your form was submitted successfully</p>
    </div>
    <Link to="/products">Go back to the products</Link>
  </Layout>
)

export default thankYouPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>
      Hi from contact form, using <a href="https://formspree.io/">formspree</a>
    </h1>
    <form action="https://formspree.io/mzbanabp" method="POST">
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <label htmlFor="name">Name:</label>
      <br />
      <input type="text" name="name" id="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" name="email" id="email" />
      <br />
      <label htmlFor="description">Description:</label>
      <br />
      <textarea type="text" name="description" id="description" rows="5" />
      <br />
      <button type="submit">Submit</button>
      <input
        type="hidden"
        name="_next"
        value="http://localhost:8000/thank-you.js"
      />
    </form>
    <div className="back-to-home">
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage

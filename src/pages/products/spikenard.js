import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const ComponentName = ({
  data: {
    oohlalava: {
      product: { name, description, image },
    },
  },
}) => {
  return (
    <Layout>
      <div>
        <div className="img-wrapper" style={{ height: "300" }}>
          <img src={image} alt={name} />
        </div>

        <div className="single-product-paragraph">
          <h1>Single Product: {name}</h1>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    oohlalava {
      product(id: "2011") {
        name
        description
        image
      }
    }
  }
`

export default ComponentName

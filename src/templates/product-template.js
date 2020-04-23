// SINGLE WORDPRESS API PRODUCT PAGE TEMPLATE
import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
console.log(ComponentName)

export const query = graphql`
  query GetSingleProduct($slug: String) {
    oohlalava {
      singleProduct: products(filter_name: $slug, limit: 1) {
        name
        price
        product_id
        description
        image
      }
    }
  }
`

export default ComponentName

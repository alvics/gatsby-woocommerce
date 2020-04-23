import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const Wpapi = ({ data }) => {
  return (
    <div className="container">
      <h1>Products</h1>
      <Link to="/contact/">Contact Us</Link>
      <div className="product-grid">
        <section className="wpAPI_grid_wrapper">
          {data.oohlalava.products.map(product => {
            // console.log(product)
            return (
              <article key={product.product_id}>
                <span className="wpAPI_Image_wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    key={product.product_id}
                  />

                  <h3>{product.name}</h3>
                  <p>${product.price}</p>

                  <Link
                    to={`/products/${
                      product.name
                        .toString() // Cast to string
                        .toLowerCase() // Convert the string to lowercase letters
                        .trim() // Remove whitespace from both sides of a string
                        .replace(/\s+/g, "-") // Replace spaces with -
                        .replace(/&/g, "-y-") // Replace & with 'and'
                        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
                        .replace(/\-\-+/g, "-") // Replace multiple - with single -
                    }`}
                  >
                    More details
                  </Link>
                </span>
              </article>
            )
          })}
        </section>
      </div>
    </div>
  )
}
export const query = graphql`
  {
    oohlalava {
      products(filter_category_id: "114", limit: 9) {
        price
        name
        image
        product_id
      }
    }
  }
`

export default Wpapi

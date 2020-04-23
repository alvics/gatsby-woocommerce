/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
// // RETURN WORDPRESS API PAGES DYNAMICALLY
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query GetSingleProduct($slug: String) {
//       oohlalava {
//         singleProduct: products(filter_name: $slug, limit: 10) {
//           name
//         }
//       }
//     }
//   `)

//   result.data.oohlalava.singleProduct.forEach(wp_product => {
//     createPage({
//       path: `/products/${wp_product.name
//         .toString()
//         .toLowerCase()
//         .trim()
//         .replace(/\s+/g, "-")
//         .replace(/&/g, "-y-")
//         .replace(/[^\w\-]+/g, "")
//         .replace(/\-\-+/g, "-")}`,
//       component: path.resolve(`src/templates/product-template.js`),
//       context: {
//         slug: wp_product.name
//           .toString()
//           .toLowerCase()
//           .trim()
//           .replace(/\s+/g, "-")
//           .replace(/&/g, "-y-")
//           .replace(/[^\w\-]+/g, "")
//           .replace(/\-\-+/g, "-"),
//       },
//     })
//   })
// }

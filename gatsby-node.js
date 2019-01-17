  /**
   * Implement Gatsby's Node APIs in this file.
   *
   * See: https://www.gatsbyjs.org/docs/node-apis/
   */

  // You can delete this file if you're not using it

  const path = require('path')
  // const data = require('./src/storedata.js')
  const data = require('./src/bla/bla.js')

  exports.createPages = ({ boundActionCreators }) => {
    const { createPage } = boundActionCreators

    // Your component that should be rendered for every item in JSON.
    const template = path.resolve(`src/pages/store.js`)

    // Create pages for each JSON entry.
    data.forEach(({ page, menu, store, location }) => {
      const path = page

      createPage({
        path,
        component: template,

        // Send additional data to page from JSON (or query inside template)
        context: {
          path,
          menu,
          store,
          location,
        },
      })
    })
  }

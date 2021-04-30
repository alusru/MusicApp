/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.onCreatePage = async({page,actions})=>{
    const {createPage} = actions
    if(page.path.match(/^\/artist/)){
        createPage({
            path: "/artist",
            matchPath: "/artist/:id",
            component: path.resolve(`src/pages/artist.js`),
        })
    }

    if(page.path.match(/^\/album/)){
        createPage({
            path: "/album",
            matchPath: "/album/:id",
            component: path.resolve(`src/pages/album.js`),
        })
    }
}
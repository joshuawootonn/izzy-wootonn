const { createRemoteFileNode } = require('gatsby-source-filesystem');

const slugify = require('slugify');

exports.createPages = async function({ actions, graphql }) {
    const {
        data: { allContentfulFilm },
    } = await graphql(`
        {
            allContentfulFilm(sort: { fields: [date], order: DESC }) {
                edges {
                    previous {
                        title
                    }
                    node {
                        vimeoId
                        title
                    }
                    next {
                        title
                    }
                }
            }
        }
    `);

    allContentfulFilm.edges.forEach(edge => {
        const slug = slugify(edge.node.title);
        actions.createPage({
            path: `/film/${slug}`,
            component: require.resolve(`./src/templates/film.template.js`),
            context: {
                id: edge.node.vimeoId.toString(),
                next: edge.next ? `/film/${slugify(edge.next.title)}` : null,
                previous: edge.previous
                    ? `/film/${slugify(edge.previous.title)}`
                    : null,
            },
        });
    });
};

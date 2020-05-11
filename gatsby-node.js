const slugify = require('slugify');

exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
        {
            allVimeoVideo {
                edges {
                    node {
                        id
                        title
                        url
                        description
                        date
                    }
                    previous {
                        title
                    }
                    next {
                        title
                    }
                }
            }
        }
    `);

    data.allVimeoVideo.edges.forEach(edge => {
        const slug = slugify(edge.node.title);
        actions.createPage({
            path: `/film/${slug}`,
            component: require.resolve(`./src/templates/film.template.js`),
            context: {
                id: edge.node.id.toString(),
                next: edge.next ? `/film/${slugify(edge.next.title)}`: null,
                previous: edge.previous ? `/film/${slugify(edge.previous.title)}` : null,
            },
        });
    });
};

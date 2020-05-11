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
                        id
                    }
                    next {
                        id
                    }
                }
            }
        }
    `);

    data.allVimeoVideo.edges.forEach(edge => {
        const slug = slugify(edge.node.title);
        actions.createPage({
            path: `/film/${slug}`,
            component: require.resolve(`./src/templates/film.template.tsx`),
            context: { slug: slug, id: edge.node.id, title: edge.node.title },
        });
    });
};

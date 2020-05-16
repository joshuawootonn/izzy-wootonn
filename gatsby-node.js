const { createRemoteFileNode } = require('gatsby-source-filesystem');

const slugify = require('slugify');

exports.createPages = async function({ actions, graphql }) {
    const {
        data: { allVimeoVideo },
    } = await graphql(`
        {
            allVimeoVideo {
                edges {
                    previous {
                        title
                    }
                    node {
                        id
                        title
                    }
                    next {
                        title
                    }
                }
            }
        }
    `);

    const {
        data: { allContentfulGraphicDesign },
    } = await graphql(`
        {
            allContentfulGraphicDesign {
                edges {
                    previous {
                        title
                    }
                    node {
                        id
                        title
                    }
                    next {
                        title
                    }
                }
            }
        }
    `);

    allVimeoVideo.edges.forEach(edge => {
        const slug = slugify(edge.node.title);
        actions.createPage({
            path: `/film/${slug}`,
            component: require.resolve(`./src/templates/film.template.js`),
            context: {
                id: edge.node.id.toString(),
                next: edge.next ? `/film/${slugify(edge.next.title)}` : null,
                previous: edge.previous
                    ? `/film/${slugify(edge.previous.title)}`
                    : null,
            },
        });
    });
    allContentfulGraphicDesign.edges.forEach(edge => {
        const rootRoute = slugify('graphic-design');
        const slug = slugify(edge.node.title);
        console.log(slug);
        actions.createPage({
            path: `/${rootRoute}/${slug}`,
            component: require.resolve(
                `./src/templates/graphicDesign.template.js`
            ),
            context: {
                id: edge.node.id.toString(),
                next: edge.next
                    ? `/${rootRoute}/${slugify(edge.next.title)}`
                    : null,
                previous: edge.previous
                    ? `/${rootRoute}/${slugify(edge.previous.title)}`
                    : null,
            },
        });
    });
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
    type Vimeo____video implements Node {
      img: File @link(from: "img___NODE")
    }
  `);
};
exports.onCreateNode = async ({
    node,
    actions: { createNode },
    store,
    cache,
    createNodeId,
}) => {
    // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode

    if (node.internal.type === 'Vimeo____video' && node.thumbnail.hd) {
        const fileNode = await createRemoteFileNode({
            url: node.thumbnail.hd, // string that points to the URL of the image
            parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
            createNode, // helper function in gatsby-node to generate the node
            createNodeId, // helper function in gatsby-node to generate the node id
            cache, // Gatsby's cache
            store, // Gatsby's redux store
        });
        // if the file was created, attach the new node to the parent node
        if (fileNode) {
            node.img___NODE = fileNode.id;
        }
    }
};

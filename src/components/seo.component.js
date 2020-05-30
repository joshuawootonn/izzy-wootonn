import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const SeoComponent = ({
    description,
    lang = 'en',
    meta = [],
    title,
    image,
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        defaultTitle: title
                        titleTemplate
                        defaultDescription: description
                        siteUrl
                        defaultImage: image
                        twitterUsername
                        keywords
                    }
                }
            }
        `
    );
    const { pathname } = useLocation();

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
        keywords,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || `${siteUrl}${defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };

    const templatedTitle = `${seo.title} · Izzy Wootonn`;

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={keywords} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            <meta property="og:type" content="website" />
            {seo.title && <meta property="og:title" content={templatedTitle} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && (
                <meta name="twitter:title" content={templatedTitle} />
            )}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    );
};

export default SeoComponent;

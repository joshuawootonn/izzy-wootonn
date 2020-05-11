import React, { FC } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoList from '../components/videoList';
import { graphql } from 'gatsby';
import VideoComponent from '../components/video';

export const query = graphql`
    query($title: String!) {
        vimeoVideo(title: { eq: $title }) {
            url
            title
            thumbnail {
                large
            }
            duration
            description
            date
            iframe
        }
    }
`;

const Film: FC = ({ data: { vimeoVideo: video } }) => {
    return (
        <Layout>
            <SEO title="Work" />
            <h1>Film</h1>
            <VideoComponent video={video} />
        </Layout>
    );
};

export default Film;

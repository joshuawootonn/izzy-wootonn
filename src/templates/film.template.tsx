import React, { FC } from 'react';

import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import VideoList from '../components/videoList.component';
import { graphql } from 'gatsby';
import VideoComponent from '../components/video.component';

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

const FilmTemplate: FC = ({ data: { vimeoVideo: video } }) => {
    return (
        <LayoutComponent>
            <SeoComponent title="Work" />
            <h1>Film</h1>
            <VideoComponent video={video} />
        </LayoutComponent>
    );
};

export default FilmTemplate;

import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoList from '../components/videoList';

const Film = () => (
    <Layout>
        <SEO title="Work" />
        <h1>Film</h1>
        <VideoList />
    </Layout>
);

export default Film;

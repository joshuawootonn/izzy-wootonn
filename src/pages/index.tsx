import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoList from '../components/videoList';

const IndexPage = () => (
    <Layout>
        <SEO title="Work" />
        <h1>Work</h1>
        <VideoList />
    </Layout>
);

export default IndexPage;

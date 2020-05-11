import React from 'react';

import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import VideoList from '../components/videoList.component';

const Film = () => (
    <LayoutComponent>
        <SeoComponent title="Work" />
        <h1>Film</h1>
        <VideoList />
    </LayoutComponent>
);

export default Film;

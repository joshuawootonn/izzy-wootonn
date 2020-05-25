import React from 'react';
import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import ImageComponent from '../components/image.component';

const About = () => (
    <LayoutComponent>
        <SeoComponent title="About" />
        <h1>About</h1>

        <div style={{ width: '720px' }}>
            <div style={{ width: '270px' }}>
                <ImageComponent />
            </div>
            <p>
                Zachary Epcar (b. 1987, San Francisco) is a filmmaker whose work
                has screened at New York Film Festival - Projections, the
                Rotterdam, Edinburgh, and San Francisco International Film
                Festivals, Museum of Contemporary Art Chicago, Pacific Film
                Archive, Ann Arbor Film Festival, Crossroads, Onion City, Images
                Festival, and elsewhere. He studied at Bard College, is
                currently in an MFA program at the University of Wisconsin
                Milwaukee, and is co-programmer of Light Field, an annual
                exhibition of experimental cinema in San Francisco:
                www.lightfieldfilm.org
            </p>
        </div>
    </LayoutComponent>
);

export default About;

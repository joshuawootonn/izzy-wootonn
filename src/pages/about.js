import React from 'react';
import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import { graphql } from 'gatsby';
import AboutComponent from '../components/about.component';

export const query = graphql`
    {
        contentfulAbout {
            id
            vimeo
            linkedIn
            insta
            resume {
                file {
                    url
                }
            }
            bio {
                id
                bio
            }
            profilePicture {
                fluid(maxWidth: 1000) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
    }
`;

const About = ({
    data: {
        contentfulAbout: {
            vimeo,
            linkedIn,
            insta,
            resume,
            profilePicture,
            bio: { bio },
        },
    },
}) => {
    console.log(resume);
    return (
        <LayoutComponent>
            <SeoComponent title="About" />
            <AboutComponent
                bio={bio}
                profilePicture={profilePicture}
                vimeo={vimeo}
                linkedIn={linkedIn}
                resume={resume}
                insta={insta}
            />
        </LayoutComponent>
    );
};

export default About;

import React, { useState } from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

import { Theme } from 'graphql-playground-html/dist/render-playground-page';
import CopyToClipboard from 'react-copy-to-clipboard';
import ProfileImage from './image';
import { StyledThemeProp as STP } from '../constants/types';

const Sidebar = styled.div`
    background: ${(props: STP) => props.theme.colors.light};
    margin-bottom: 1.45rem;
    width: 160px;
    height: 100vh;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
`;
const Section = styled.div`
    margin-bottom: 16px;
`;

const InternalLink = styled(Link)`
    display: block;
    color: ${(props: STP) => props.theme.colors.white};
    text-decoration: none;
`;
const ExternalLink = styled.a`
    display: block;
    color: ${(props: STP) => props.theme.colors.white};
    text-decoration: none;
`;
const Button = styled.button`
    text-decoration: none;
    display: block;
    color: ${(props: STP) => props.theme.colors.white};
    background: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
    padding: 0px;
    font: inherit;
    &:focus {
        outline: 0; //TODO: Implement other indication
    }
`;

export interface Props {
    siteTitle: string;
}

const SidebarComponent = ({ siteTitle = '' }: Props) => {
    const [message, changeMessage] = useState<string>('');

    const onEmailCopy = () => {
        changeMessage('Copied!');
        setTimeout(() => changeMessage(''), 1000);
    };
    return (
        <Sidebar className="sidebar">
            <Section>
                <h1>
                    <InternalLink to="/">{siteTitle}</InternalLink>
                </h1>
                <InternalLink to="/">Work</InternalLink>
                <InternalLink to="/about/">About</InternalLink>
            </Section>
            <Section>
                <ExternalLink href="https://www.facebook.com/izzy.schrock">
                    facebook
                </ExternalLink>
                <ExternalLink href="https://www.instagram.com/izzyschrock/">
                    instagram
                </ExternalLink>
                <ExternalLink href="https://vimeo.com/samfathallah">
                    vimeo
                </ExternalLink>
                <CopyToClipboard
                    text="joshuawootonn@gmail.com"
                    onCopy={onEmailCopy}
                >
                    <Button>
                        email
                        {message && `- ${message}`}
                    </Button>
                </CopyToClipboard>
            </Section>
        </Sidebar>
    );
};

export default SidebarComponent;

import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: auto;
    margin-left: 192px;
    padding: 20px;
`;
export interface Props {
    children: React.ReactElement | React.ReactElement[];
}

const ContentComponent = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default ContentComponent;

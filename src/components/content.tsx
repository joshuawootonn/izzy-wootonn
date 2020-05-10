import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 300px;
    width: auto;
`;
export interface Props {
    children: React.ReactElement | React.ReactElement[];
}

const Content = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Content;

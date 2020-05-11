import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: auto;
    padding: 20px;
`;
export interface Props {
    children: React.ReactElement | React.ReactElement[];
}

const Content = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Content;

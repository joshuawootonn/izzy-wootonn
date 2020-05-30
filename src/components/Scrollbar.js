import { css } from 'styled-components/macro';
import { Scrollbars as CustomScrollbar } from 'react-custom-scrollbars';
import React from 'react';

const Scrollbar = props => {
    const renderThumb = props => (
        <div
            css={css`
                background-color: ${({ theme }) => theme.colors.darkActive};
                border-radius: 10px;
                transition: background-color ease-in-out 300ms;
                :hover,
                :active {
                    background-color: ${({ theme }) => theme.colors.dark};
                }
            `}
            {...props}
        />
    );

    const renderView = props => (
        <div
            className="box"
            css={css`
                padding: 0 20px;
            `}
            {...props}
        />
    );
    return (
        <CustomScrollbar
            {...props}
            thumbMinSize={30}
            renderThumbVertical={renderThumb}
            renderThumbHorizontal={renderThumb}
            renderView={renderView}
        />
    );
};
export default Scrollbar;

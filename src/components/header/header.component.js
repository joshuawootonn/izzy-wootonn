import React from 'react';
import { breaks } from '../styles';
import MobileNavigation from './mobileNavigation';
import DesktopNavigation from './desktopNavigation';
import { css } from 'styled-components/macro';

const styles = {
    mobile: css`
        display: none;
        @media (max-width: ${breaks.large}px) {
            display: flex;
        }
    `,
    desktop: css`
        display: none;
        @media (min-width: ${breaks.large}px) {
            display: flex;
        }
    `,
};

const HeaderComponent = () => (
    <>
        <MobileNavigation css={styles.mobile} />
        <DesktopNavigation css={styles.desktop} />
    </>
);

export default HeaderComponent;

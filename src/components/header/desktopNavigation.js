import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/logo-bw.svg';
import { css } from 'styled-components/macro';
import navigationStyles from './navigationStyles';

const styles = {
    root: css`
        padding: 0 60px 0 30px;
    `,
    linkBox: css`
        display: flex;
        flex-direction: row;
        a {
            text-decoration: none;
            color: black;
            margin-left: 20px;
        }
    `,
};

const DesktopNavigation = () => (
    <div css={[navigationStyles.root, styles.root]}>
        <Link to="/film">
            <Logo css={navigationStyles.logo} />
        </Link>
        <div css={styles.linkBox}>
            <Link to="/film">Film</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
);

export default DesktopNavigation;

import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../../images/logo-bw.svg';
import { css } from 'styled-components/macro';
import navigationStyles from './navigationStyles';
import Link from '../linkRoll.component';

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

const DesktopNavigation = props => {
    return (
        <div css={[navigationStyles.root, styles.root]} {...props}>
            <GatsbyLink to="/">
                <Logo css={navigationStyles.logo} />
            </GatsbyLink>
            <div css={styles.linkBox}>
                <Link to="/">Film</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default DesktopNavigation;

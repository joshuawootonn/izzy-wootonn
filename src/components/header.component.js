import React from 'react';
import { Link } from 'gatsby';
import { css } from 'styled-components/macro';
import dimensions from '../constants/dimensions';
import zIndex from '../constants/zIndex';
import Logo from '../images/logo-bw.svg';

const styles = {
    root: css`
        height: ${dimensions.header}px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        z-index: ${zIndex.header};
        width: 100vw;
        padding: 0 60px 0 30px;
    `,
    logo: css`
        width: 155px;
        height: auto;
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

const HeaderComponent = () => {
    return (
        <div css={styles.root}>
            <Link to="/film">
                <img css={styles.logo} src={Logo} />
            </Link>
            <div css={styles.linkBox}>
                <Link to="/film">Film</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default HeaderComponent;

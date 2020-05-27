import React from 'react';
import { Link } from 'gatsby';
import { css } from 'styled-components/macro';
import dimensions from '../constants/dimensions';
import zIndex from '../constants/zIndex';
import Logo from '../images/logo-bw.svg';
import Burger from '../images/burger.svg';
import { useBoolean, useMedia } from 'react-use';
import { breaks } from './styles';
import { typography } from './typography';

const styles = {
    root: css`
        height: ${dimensions.header}px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        z-index: ${zIndex.header};
        background-color: white;

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
    burgerContainer: css`
        height: 30px;
        width: 30px;
        background-color: transparent;
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    mobileNavRoot: css`
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: ${zIndex.header - 1};
        background-color: white;
    `,
    mobileNavContent: css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        a {
            ${typography.mobileLinks};
            text-decoration: none;
            color: black;
            margin-left: 20px;
        }
    `,
};

const HeaderComponent = () => {
    const isMobile = useMedia(`(max-width: ${breaks.large}px)`);
    const [isOpen, toggleOpen] = useBoolean(false);
    return (
        <>
            <div css={styles.root}>
                <Link to="/film">
                    <Logo css={styles.logo} />
                </Link>
                {isMobile ? (
                    <button css={styles.burgerContainer} onClick={toggleOpen}>
                        <Burger />
                    </button>
                ) : (
                    <div css={styles.linkBox}>
                        <Link to="/film">Film</Link>
                        <Link to="/about">About</Link>
                    </div>
                )}
            </div>
            {isOpen && (
                <div css={styles.mobileNavRoot} onClick={toggleOpen}>
                    <div css={styles.mobileNavContent}>
                        <Link to="/film">Film</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeaderComponent;

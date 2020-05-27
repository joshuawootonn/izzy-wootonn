import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from 'styled-components/macro';
import dimensions from '../../constants/dimensions';
import zIndex from '../../constants/zIndex';
import Logo from '../../images/logo-bw.svg';
import { useMedia } from 'react-use';
import { breaks, mobile } from '../styles';
import { typography } from '../typography';
import BurgerButton from '../burgerButton.component';
import anime from 'animejs';

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
        ${mobile(css`
            padding: 0 30px;
        `)};
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

    mobileNavRoot: css`
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: ${zIndex.header - 1};
        background-color: white;
        opacity: 0;
        left: 100vw;
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
    const [isOpen, _setOpen] = useState(false);

    const setOpen = isOpen => {
        if (isOpen) {
            _setOpen(isOpen);
            anime({
                targets: '[data-animate=mobile-navigation]',
                easing: 'easeInOutCubic',
                duration: 400,
                left: 0,
                opacity: 1,
            });
        } else {
            anime({
                targets: '[data-animate=mobile-navigation]',
                easing: 'easeInOutCubic',
                duration: 400,
                left: '100vw',
                opacity: 0,
            });
            _setOpen(false);
        }
    };

    return (
        <>
            <div css={styles.root}>
                <Link to="/film">
                    <Logo css={styles.logo} />
                </Link>
                {isMobile ? (
                    <BurgerButton isActive={isOpen} toggleActive={setOpen} />
                ) : (
                    <div css={styles.linkBox}>
                        <Link to="/film">Film</Link>
                        <Link to="/about">About</Link>
                    </div>
                )}
            </div>
            <div
                css={styles.mobileNavRoot}
                data-animate="mobile-navigation"
                onClick={() => setOpen(false)}
            >
                <div css={styles.mobileNavContent}>
                    <Link to="/film">Film</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;

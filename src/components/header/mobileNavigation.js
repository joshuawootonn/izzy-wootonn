import React, { useState } from 'react';
import Link from '../linkFade.component';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../../images/logo-bw.svg';
import BurgerButton from '../burgerButton.component';
import { css } from 'styled-components/macro';
import zIndex from '../../constants/zIndex';
import { typography } from '../typography';
import anime from 'animejs';

import navigationStyles from './navigationStyles';
import dimensions from '../../constants/dimensions';

const styles = {
    root: css`
        height: ${dimensions.mobile.header}px;
        padding: 0 30px;
    `,

    activeRoot: css`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: ${zIndex.header - 1};
        background-color: white;
        opacity: 0;
        left: 100vw;
    `,
    activeContent: css`
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
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    `,
};

const MobileNavigation = props => {
    const [isOpen, _setOpen] = useState(false);

    const setOpen = isOpen => {
        if (isOpen) {
            _setOpen(isOpen);
            anime({
                targets: '[data-animate=mobile-active-root]',
                easing: 'easeInOutCubic',
                duration: 400,
                left: 0,
                opacity: 1,
            });
        } else {
            _setOpen(false);
            anime({
                targets: '[data-animate=mobile-active-root]',
                easing: 'easeInOutCubic',
                duration: 400,
                left: '100vw',
                opacity: 0,
            });
        }
    };
    return (
        <>
            <div css={[navigationStyles.root, styles.root]} {...props}>
                <GatsbyLink css={navigationStyles.logoContainer} to="/">
                    <Logo css={navigationStyles.logo} />
                </GatsbyLink>
                <BurgerButton isActive={isOpen} toggleActive={setOpen} />
            </div>
            <div
                css={styles.activeRoot}
                data-animate="mobile-active-root"
                onClick={() => setOpen(false)}
            >
                <div css={styles.activeContent}>
                    <Link to="/">Film</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </>
    );
};

export default MobileNavigation;

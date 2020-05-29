import React, { useEffect } from 'react';
import { css } from 'styled-components/macro';
import anime from 'animejs';

const styles = {
    burgerContainer: css`
        background-color: transparent;
        border: none;
        padding: 0;
        display: flex;
    `,
    line: css`
        stroke-width: 2px;
        stroke: ${({ theme }) => theme.colors.black};
    `,
};

const defaultAnimationValues = {
    easing: 'easeInOutCubic',
    duration: 200,
};
const delta = 5;
const burgerSize = 30;
const line1Selector = '[data-animate=burger-path-1]';
const line2Selector = '[data-animate=burger-path-2]';

const animateToX = () => {
    anime({
        ...defaultAnimationValues,
        targets: line1Selector,
        points: [
            {
                value: `${delta} ${delta}, ${burgerSize - delta} ${burgerSize -
                    delta}`,
            },
        ],
    });
    anime({
        ...defaultAnimationValues,
        targets: line2Selector,
        points: [
            {
                value: `${delta} ${burgerSize - delta}, ${burgerSize -
                    delta} ${delta}`,
            },
        ],
    });
};

const animateToBurger = () => {
    anime({
        ...defaultAnimationValues,
        targets: line1Selector,
        points: [{ value: `0 10, ${burgerSize} 10` }],
    });
    anime({
        ...defaultAnimationValues,
        targets: line2Selector,
        points: [{ value: `0 20,${burgerSize} 20` }],
    });
};

const BurgerButton = ({ isActive, toggleActive }) => {
    useEffect(() => {
        !isActive ? animateToBurger() : animateToX();
    }, [isActive]);

    return (
        <button
            css={styles.burgerContainer}
            onClick={() => {
                toggleActive(!isActive);
            }}
            aria-label="toggle-mobile-navigation"
            aria-pressed={isActive ? 'true' : 'false'}
        >
            <svg
                width={burgerSize}
                height={burgerSize}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon
                    data-animate="burger-path-1"
                    points={`0 10, ${burgerSize} 10`}
                    css={styles.line}
                />
                <polygon
                    data-animate="burger-path-2"
                    points={`0 20, ${burgerSize} 20`}
                    css={styles.line}
                />
            </svg>
        </button>
    );
};

export default BurgerButton;

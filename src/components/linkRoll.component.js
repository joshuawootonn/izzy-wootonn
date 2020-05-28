import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { css } from 'styled-components/macro';
import anime from 'animejs';
import slugify from 'slugify';

const styles = {
    root: css`
        position: relative;
        overflow: hidden;
        display: flex;

        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
        text-shadow: 0 1em 0 ${({ theme }) => theme.colors.dark};
        user-select: none;
    `,
    letter: css`
        display: inline-block;
        user-select: none;
    `,
};

const Link = ({ children, type, ...props }) => {
    const slug = slugify(children);
    const targets = `[data-animate=link-${slug}] [data-animate=link-letter]`;

    const focusAnimation = () => {
        console.log(targets, 'focus');
        return anime.timeline({ easing: 'linear' }).add({
            targets,
            translateY: [0, '-1em'],
            duration: 150,
            delay: anime.stagger(50, { easing: 'easeInOutCubic' }),
        });
    };

    const blurAnimation = () =>
        anime.timeline({ easing: 'linear' }).add({
            targets,
            translateY: ['-1em', 0],
            duration: 150,
            delay: anime.stagger(50, { easing: 'easeInOutCubic' }),
        });

    const renderLetters = () =>
        children.split('').map((letter, i) => (
            <span key={i} data-animate="link-letter" css={styles.letter}>
                {letter}
            </span>
        ));

    return props.href ? (
        <a
            data-animate={`link-${slug}`}
            css={styles.root}
            onMouseEnter={focusAnimation}
            onMouseLeave={blurAnimation}
            onFocus={focusAnimation}
            onBlur={blurAnimation}
            onTouchStart={e => {
                e.preventDefault();
                focusAnimation();
            }}
            onTouchEnd={e => {
                e.preventDefault();
                blurAnimation();
            }}
            {...props}
        >
            {renderLetters()}
        </a>
    ) : (
        <GatsbyLink
            data-animate={`link-${slug}`}
            css={styles.root}
            onMouseEnter={focusAnimation}
            onMouseLeave={blurAnimation}
            onFocus={focusAnimation}
            onBlur={blurAnimation}
            onTouchStart={e => {
                e.preventDefault();
                focusAnimation();
            }}
            onTouchEnd={e => {
                e.preventDefault();
                blurAnimation();
            }}
            {...props}
        >
            {renderLetters()}
        </GatsbyLink>
    );
};

export default Link;

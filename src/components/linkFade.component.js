import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { css } from 'styled-components/macro';
import anime from 'animejs';
import slugify from 'slugify';
import { theme } from './layout.component';

const styles = {
    root: css`
        position: relative;
        overflow: hidden;
        display: flex;

        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
        user-select: none;

        span {
            transition: color 150ms ease-in-out;
        }
        :active {
            span {
                color: ${({ theme }) => theme.colors.darkActive} !important;
            }
        }
    `,
    letter: css`
        display: inline-block;
        user-select: none;
    `,
};

const Link = ({ children, ...props }) => {
    const slug = slugify(children.replace(/\W/g, ''));
    const targets = `[data-animate=link-${slug}] [data-animate=link-letter]`;

    const focusAnimation = () => {
        return anime.timeline({ easing: 'linear' }).add({
            targets,
            color: theme.colors.dark,
            duration: 150,
            delay: anime.stagger(20, { easing: 'linear' }),
        });
    };

    const blurAnimation = () =>
        anime.timeline({ easing: 'linear' }).add({
            targets,
            color: theme.colors.black,
            duration: 150,
            delay: anime.stagger(20, { easing: 'linear' }),
        });

    const renderLetters = () => {
        return children.split('').map((letter, i) =>
            letter === ' ' ? (
                <>&nbsp;</>
            ) : (
                <span key={i} data-animate="link-letter" css={styles.letter}>
                    {letter}
                </span>
            )
        );
    };

    return props.href ? (
        <a
            data-animate={`link-${slug}`}
            css={styles.root}
            onMouseEnter={focusAnimation}
            onMouseLeave={blurAnimation}
            onFocus={focusAnimation}
            onBlur={blurAnimation}
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
            {...props}
        >
            {renderLetters()}
        </GatsbyLink>
    );
};

export default Link;

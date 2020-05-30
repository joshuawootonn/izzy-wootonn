import { css } from 'styled-components/macro';

export const font = {
    primary: css`
        font-family: 'lemonmilk-regular', serif;
    `,
    secondary: css`
        font-family: 'worksans-regular', serif;
    `,
};

export const typography = {
    mobileLinks: css`
        font-size: 62px;
        color: ${({ theme }) => theme.colors.black};
    `,
    title: css`
        font-size: 55px;
        line-height: 60px;
        color: ${({ theme }) => theme.colors.black};
    `,
    about: css`
        font-size: 22px;
        line-height: 24px;
    `,
    largeText: css`
        font-size: 22px;
        line-height: 31px;
        color: ${({ theme }) => theme.colors.black};
    `,
    smallText: css`
        font-size: 12px;
        line-height: 16px;
        color: ${({ theme }) => theme.colors.black};
    `,
};

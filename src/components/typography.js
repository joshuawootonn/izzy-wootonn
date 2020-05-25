import { css } from 'styled-components/macro';

const typography = {
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
export default typography;

import { css } from 'styled-components/macro';

export const breaks = {
    large: 1000,
};

export const mobile = aaa =>
    css`
        @media (min-width: 0px) and (max-width: 1000px) {
            ${aaa};
        }
    `;
export const desktop = aaa =>
    css`
        @media (min-width: 1000px) {
            ${aaa};
        }
    `;

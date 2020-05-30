import { css } from 'styled-components/macro';
import dimensions from '../../constants/dimensions';
import zIndex from '../../constants/zIndex';

export default {
    root: css`
        height: ${dimensions.header}px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        z-index: ${zIndex.header};
        background-color: transparent;

        width: 100vw;
    `,
    logoContainer: css`
        margin-top: 10px;
    `,
    logo: css`
        width: 155px;
        height: auto;
        path {
            transition: all ease-in-out 300ms;
        }
        :hover {
            path {
                fill: ${({ theme }) => theme.colors.dark};
            }
        }
        :active {
            path {
                fill: ${({ theme }) => theme.colors.darkActive};
            }
        }
    `,
};

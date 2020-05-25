declare module 'react-use';

import { CSSProp } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
x
    }
}

declare module 'react' {
    interface Attributes {
        css?: CSSProp;
    }
}

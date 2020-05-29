import React from 'react';
import { useMedia } from 'react-use';
import { breaks } from '../styles';
import MobileNavigation from './mobileNavigation';
import DesktopNavigation from './desktopNavigation';

const HeaderComponent = () => {
    const isMobile = useMedia(`(max-width: ${breaks.large}px)`);
    return isMobile ? <MobileNavigation /> : <DesktopNavigation />;
};

export default HeaderComponent;

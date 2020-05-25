import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const Component = () => {
    useEffect(() => {
        navigate('/film/');
    }, []);
    return null;
};
export default Component;

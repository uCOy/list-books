import React from 'react'
import Container from './Container.module.css';

const UIContainer = ( { children } ) => {
    return ( 
        <div className={Container.UIContainer}>
            { children }
        </div>
     );
}
 
export default UIContainer;
import React from 'react';  
import CSSModules from 'react-css-modules';
import styles from './styles.scss';     

function ModuleTest(props) {    
    return (
        <div styleName="wrapper">
            <p>This is my foreign module las change</p>
        </div>
    );
}
 
export default CSSModules(ModuleTest, styles);
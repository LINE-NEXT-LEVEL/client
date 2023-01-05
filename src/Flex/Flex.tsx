import React from "react";
import * as css from './Flex.css';


export const Flex = ({children}) => {
    return(
        <div className={css.Flex}>{children}</div>
    );
}
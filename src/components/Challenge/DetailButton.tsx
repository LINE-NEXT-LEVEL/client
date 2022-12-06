import React from 'react';
import * as css from './DetailButton.css';

export const DetailButton = ({name,children})=>{
    return (
        <details className={css.DetailButton}>
        <summary>{name}</summary>
        <strong>{name}</strong>
        <div>
        {children}
        </div>
    </details>
    )
}
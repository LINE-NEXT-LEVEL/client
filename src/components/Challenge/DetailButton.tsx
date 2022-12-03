import React from 'react';

export const DetailButton = ({name,content})=>{
    return (
        <details>
        <summary>{name}</summary>
        <div>{content}</div>
    </details>
    )
}
import React, { ReactNode, useCallback, useState } from 'react';

export type ChallengeProps = {
    title: string;
    index:number;
    tabIndex: number;
   children:ReactNode;
}
export const Challenge = ({title,index,children,...props}:ChallengeProps) => {
    const {tabIndex} = props;
    const displayState = tabIndex===index? 'block':'none';
    return (
        <div style={{display:displayState}}>
            <strong>{title}</strong>
            {children}
        </div>
    )
}
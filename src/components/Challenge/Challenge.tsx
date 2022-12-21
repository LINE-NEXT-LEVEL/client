import React, { ReactNode, useCallback, useState } from 'react';

export type ChallengeProps = {
    title: string;
    index:number;
    children?:ReactNode;
}
export const Challenge = ({title,children,index,...props}:ChallengeProps) => {
    return (
        <div>
            <strong>{index}.{title}</strong>
            <div>
            {children}
            </div>
        
        </div>
    )
}
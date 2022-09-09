import React, {useCallback} from 'react';
import { useTheme } from "@site/src/components/hooks/useTheme";

import * as css from './Card.css';

export type CardProps = {
    title: string;
    description: string;
    link: string;
}

export const Card = ({ title, description, link }: CardProps) => {
    const theme = useTheme();
    const onClick = useCallback(() => {
        location.href = link;
    }, [])
    return (
        <div className={css.Card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onClick}>더 읽어보기</button>
        </div>
    );
}
import React, {ReactElement, ReactNode,useCallback, useState, } from 'react';
import { Tab } from './Tab';
import { TabContext } from '../hooks/useTab';

export type ChallengeListProps = {
    children?: any;
    firstTitle: string;
}

export const ChallengeList = ({firstTitle, children}:ChallengeListProps) => {
    return (
        <div>
            <div>Try out some Challenges</div>
            <TabContext.Provider value={{tab:firstTitle}}>
                {children}
            </TabContext.Provider>
        </div>
    )

}
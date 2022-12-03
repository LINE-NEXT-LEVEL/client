import React, {ReactNode,useCallback, useState} from 'react';
import { Challenge, ChallengeProps } from './Challenge';
import { Tab } from './Tab';

export type ChallengeListProps = {
    children: any;
    titleList: string;
}

export const ChallengeList = ({titleList, children}:ChallengeListProps) => {
    const [tabIndex,setTabIndex] = useState(0);
    return (
        <div>
            <div>Try out some Challenges</div>
            <div><Tab titleList={titleList.split(',')} setIndex={setTabIndex}/></div>
            {React.cloneElement(children,{tabIndex:{tabIndex}})}
        </div>
    )

}
import React, {ReactNode,useCallback, useState} from 'react';
import { Challenge, ChallengeProps } from './Challenge';
import { Tab } from './Tab';

export type ChallengeListProps = {
    challenges: Array<ChallengeProps>;
}

export const ChallengeList = ({challenges}:ChallengeListProps) => {
    const [index,setIndex] = useState(0);
    const titleList = challenges.map((challenge)=> challenge.title);
    return (
        <div>
            <div><Tab titleList={titleList} setIndex={setIndex}/></div>
            <Challenge {...challenges[index]}/> 
        </div>
    )

}
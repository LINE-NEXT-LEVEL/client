import React, {ReactElement, ReactNode,useCallback, useState, } from 'react';
import { Tab } from './Tab';

export type ChallengeListProps = {
    children?: any;
    titleList: string;
}

export const ChallengeList = ({titleList, children}:ChallengeListProps) => {
    const [tabIndex,setTabIndex] = useState(0);
    const childrenArr = React.Children.toArray(children);console.log(tabIndex);
    return (
        <div>
            <div>Try out some Challenges</div>
            <div><Tab titleList={titleList.split(',')} setIndex={setTabIndex}/></div>
            {childrenArr.map((child:ReactElement)=>{
                return React.cloneElement(child);
            }
            )
        }
        </div>
    )

}